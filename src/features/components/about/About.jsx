import React from "react";

import "../../styles/about.scss";

import image1 from "../../img/img1.png";
import image2 from "../../img/img2.png";
import image3 from "../../img/img3.png";
import line1 from "../../img/Vector1.svg";
import line2 from "../../img/Vector2.svg";

const About = () => {
  return (
    <section id="team" className="about">
      <article className="article">
        <h4 className="article__title">Our top team</h4>
        <p className="article__text">
          Learn more about how you can save our planet's nature.
        </p>
      </article>
      <div className="about__pics">
        <img
          src={image1}
          alt="Image1"
          className="about__pics-item first-item"
        />
        <div className="about__pics-middle">
          <img src={line1} alt="Line" className="about__pics-line" />
          <img
            src={image2}
            alt="Image2"
            className="about__pics-item middle-item"
          />
          <img src={line2} alt="Line" className="about__pics-line__second" />
        </div>
        <img src={image3} alt="Image3" className="about__pics-item last-item" />
      </div>
    </section>
  );
};

export default About;
