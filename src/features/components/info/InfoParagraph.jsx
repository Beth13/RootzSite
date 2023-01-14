import React from "react";

const InfoParagraph = ({ text }) => {
  console.log(text);
  return <p className="info__paragraph">{text}</p>;
};

export default InfoParagraph;
