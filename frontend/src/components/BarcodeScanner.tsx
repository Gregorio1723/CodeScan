import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

interface BarcodeScannerProps {
  onDetected: (barcode: string) => void;
  onClose: () => void;
}

function BarcodeScanner({
  onDetected,
  onClose,
}: BarcodeScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [error, setError] = useState("");

  useEffect(() => {
    const reader = new BrowserMultiFormatReader();
    let controls: { stop: () => void } | undefined;

    const startScanner = async () => {
      try {
        if (!videoRef.current) return;

        controls = await reader.decodeFromVideoDevice(
          undefined,
          videoRef.current,
          (result) => {
            if (result) {
              const barcode = result.getText();

              onDetected(barcode);

              controls?.stop();
            }
          },
        );
      } catch (err) {
        console.error(err);
        setError(
          "No fue posible acceder a la cámara. Verifica los permisos del navegador.",
        );
      }
    };

    startScanner();

    return () => {
      controls?.stop();
    };
  }, [onDetected]);

  return (
    <section className="scanner">
      <div className="scanner__header">
        <h2>Escanear producto</h2>

        <button
          type="button"
          className="scanner__close"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      <div className="scanner__camera">
        <video
          ref={videoRef}
          className="scanner__video"
          autoPlay
          muted
          playsInline
        />

        <div className="scanner__frame">
          <span />
        </div>
      </div>

      {error ? (
        <p className="scanner__error">{error}</p>
      ) : (
        <p className="scanner__instruction">
          Coloca el código de barras dentro del recuadro.
        </p>
      )}
    </section>
  );
}

export default BarcodeScanner;