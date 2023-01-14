import React from "react";
import Form from "./Form";

import "../../styles/contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <div className="content__article">
          <h3 className="content__article-title">Get started today!</h3>
          <p className="content__article-text">
            Learn more about how you can save our planet's nature. From smart
            consumption to switching to renewable energy, each of us can do our
            part to save the planet.
          </p>
        </div>
        <div className="contact__content-form">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
