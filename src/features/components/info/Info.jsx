import React, { useState } from "react";

import "../../styles/info.scss";
import InfoParagraph from "./InfoParagraph";

const Info = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section id="start" className="info">
      <div className="info__context">
        <h3 className="info__context-title">Ready to Get started?</h3>
        <p className="info__context-text">
          When pattern is mentioned in interior design, it is easy to asso-
          ciate it with a geometric patterned wallpaper or colourful prints on
          interior fabrics.
        </p>
        <button className="info__context-button">Contact us</button>
      </div>
      <div className="info__menu">
        <div className="info__menu_section">
          <div className="info__menu_item">
            <h4 className="info__menu_item-title">
              What can I do to protect our planet?
            </h4>
            <button
              className="info__menu_item-btn"
              onClick={() => setIsClicked(!isClicked)}
            >
              {isClicked ? "-" : "+"}
            </button>
          </div>
          {isClicked && (
            <InfoParagraph
              text={
                "Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources"
              }
            />
          )}
        </div>
        <div className="info__menu_section">
          <div className="info__menu_item">
            <h4 className="info__menu_item-title">
              How to save nature ecology?
            </h4>
            <button className="info__menu_item-btn">+</button>
          </div>
        </div>
        <div className="info__menu_section">
          <div className="info__menu_item">
            <h4 className="info__menu_item-title">
              What is nature conservation?
            </h4>
            <button className="info__menu_item-btn">+</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
