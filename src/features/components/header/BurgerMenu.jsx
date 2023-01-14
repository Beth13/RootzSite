import React from "react";

import "../../styles/header.scss";

const BurgerMenu = () => {
  return (
    <section className="burger">
      <nav className="burger__nav">
        <a href="#" className="burger__nav-item">
          Home
        </a>
        <a href="#start" className="burger__nav-item">
          Our mission
        </a>
        <a href="#slider" className="burger__nav-item">
          Places
        </a>
        <a href="#team" className="burger__nav-item">
          Team
        </a>
      </nav>
      <button className="burger__nav-btn">Apply</button>
    </section>
  );
};

export default BurgerMenu;
