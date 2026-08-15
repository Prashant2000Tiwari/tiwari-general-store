import store from "../config/store";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="subtitle">
          YOUR LOCAL KIRANA STORE
        </p>

        <h1>
          {store.tagline}
          <br/>
          <span>{store.tagline_b}</span>
        </h1>

        <p className="description">
          Fresh milk, lassi, cold drinks, snacks and
          everyday kirana essentials — all available
          at {store.name}.
        </p>

        <div className="hero-buttons">

          <a
            href="#products"
            className="primary-button"
          >
            Browse Products
          </a>

          <a
            href={store.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            📍 Get Directions
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;