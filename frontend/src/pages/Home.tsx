import { useCallback, useState } from "react";
import BarcodeScanner from "../components/BarcodeScanner";
import Header from "../components/Header";

function Home() {
  const [scannerOpen, setScannerOpen] = useState(false);
  const [barcode, setBarcode] = useState<string | null>(null);

  const handleDetected = useCallback((code: string) => {
    setBarcode(code);
    setScannerOpen(false);
  }, []);

  if (scannerOpen) {
    return (
      <div className="home">
        <Header />

        <main className="home__content">
          <BarcodeScanner
            onDetected={handleDetected}
            onClose={() => setScannerOpen(false)}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="home">
      <Header />

      <main className="home__content">
        <section className="hero">
          <span className="hero__badge">
            ESCÁNER DE PRODUCTOS
          </span>

          <h2>
            Escanea un producto
            <br />
            y conoce su información.
          </h2>

          <p>
            Utiliza la cámara de tu dispositivo para leer el
            código de barras y consultar el producto
            instantáneamente.
          </p>

          <button
            type="button"
            className="scan-button"
            onClick={() => setScannerOpen(true)}
          >
            <span>▣</span>
            Escanear producto
          </button>
        </section>

        <section className="product-preview">
          <div className="product-preview__icon">
            ▦
          </div>

          {barcode ? (
            <>
              <h3>Código detectado</h3>

              <p>
                Código de barras:
              </p>

              <strong>{barcode}</strong>
            </>
          ) : (
            <>
              <h3>Producto no seleccionado</h3>

              <p>
                Escanea un código de barras para consultar
                la información del producto.
              </p>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default Home;