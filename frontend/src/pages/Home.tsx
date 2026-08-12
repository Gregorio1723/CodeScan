import Header from "../components/Header";

function Home() {
  return (
    <div className="home">
      <Header />

      <main className="home__content">
        <section className="hero">
          <span className="hero__badge">ESCÁNER DE PRODUCTOS</span>

          <h2>
            Escanea un producto
            <br />
            y conoce su información.
          </h2>

          <p>
            Utiliza la cámara de tu dispositivo para leer el código de barras
            y consultar el producto instantáneamente.
          </p>

          <button className="scan-button">
            <span>▣</span>
            Escanear producto
          </button>
        </section>

        <section className="product-preview">
          <div className="product-preview__icon">▦</div>

          <h3>Producto no seleccionado</h3>

          <p>
            Escanea un código de barras para consultar la información del
            producto.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Home;