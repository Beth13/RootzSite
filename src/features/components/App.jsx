import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import HeadLine from "./header/HeadLine";
import Info from "./info/Info";
import SliderComponent from "./slider/Slider";

const App = () => {
  return (
    <div className="page">
      <div className="top-section">
        <Header />
        <HeadLine />
      </div>
      <About />
      <Contact />
      <Info />
      <SliderComponent />
      <Footer />
    </div>
  );
};

export default App;
