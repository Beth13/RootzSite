import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import "../../styles/slider.scss";

import cardmain from "../../img/card-main.png";
import card1 from "../../img/card1.png";
import card2 from "../../img/card2.png";
import card3 from "../../img/card3.png";
import card4 from "../../img/card4.png";
import CustomSlide from "./CustomSlide";

const SliderComponent = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="slider" className="slider">
      <Slider {...settings}>
        <CustomSlide index={1} img={cardmain} />
        <CustomSlide index={2} img={card3} />
        <CustomSlide index={3} img={card4} />
        <CustomSlide index={4} img={card1} />
        <CustomSlide index={5} img={card2} />
      </Slider>
    </section>
  );
};

export default SliderComponent;
