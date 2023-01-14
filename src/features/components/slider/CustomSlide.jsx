import React from "react";

const CustomSlide = ({ index, img, ...props }) => {
  return (
    <div className="slider__item" {...props}>
      <img src={img} alt="Picture" />
    </div>
  );
};

export default CustomSlide;
