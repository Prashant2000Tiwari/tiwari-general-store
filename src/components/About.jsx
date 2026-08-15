import store from "../config/store";
function About() {

  return (
    <section
      className="about"
      id="about"
    >

      <div className="about-content">

        <p className="subtitle">
          ABOUT US
        </p>

        <h2>
          {store.name}
        </h2>

        <p>
          Welcome to {store.name}.
          We provide everyday essentials for
          families in and around Khabra.
        </p>

        <p>
          You can browse available products,
          select the required quantity and send
          your order directly to us on WhatsApp.
        </p>

        <p>
          If you don't find a product in our list,
          simply type its name and add it to your
          order.
        </p>

      </div>

    </section>
  );
}

export default About;

