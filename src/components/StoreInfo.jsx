import store from "../config/store";
function StoreInfo() {

  return (
    <section
      className="store-info"
      id="contact"
    >

      <div className="store-info-content">

        <p className="subtitle">
          VISIT US
        </p>

        <h2>
          {store.name}
        </h2>

        <p className="store-description">
          Your local kirana store for daily
          essentials, milk, cold drinks, lassi
          and more.
        </p>


        {/* Address */}

        <div className="store-detail">

          <span className="store-detail-icon">
            📍
          </span>

          <div>

            <h3>
              Store Location
            </h3>

            <p>
              {store.address}
            </p>

          </div>

        </div>


        {/* Timings */}

        <div className="store-detail">

  <span className="store-detail-icon">
    🕐
  </span>

  <div>

    <h3>
      Store Timings
    </h3>

    <p>
      Monday - Sunday
    </p>

    <p>
      {store.timings.monday}
    </p>

  </div>

</div>


        {/* Buttons */}

        <div className="store-actions">

          <a
            href={store.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            📍 Open in Google Maps
          </a>


          <a
            href={`tel:+${store.phone}`}
            className="call-button"
          >
            📞 Call Store
          </a>


          <a
            href={`https://wa.me/${store.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-outline-button"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}

export default StoreInfo;

