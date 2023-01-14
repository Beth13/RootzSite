import React, { useState } from "react";

import "../../styles/headline.scss";

import parrot from "../../img/Parrot.png";
import title from "../../img/headlineTitle.png";
import members from "../../img/Card.png";

const HeadLine = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="headline">
      <div className="headline__content">
        <h1 className="headline__title">
          <img
            src={title}
            className="headline__title-img"
            alt="Nature needs you"
          />
        </h1>
        <p className="headline__description">
          The scale of the challenges facing our planet can seem daunting, but
          we can all do something.
        </p>
        <div className="headline__actions">
          <span className="headline__actions-loop">
            <svg
              width="14"
              height="20"
              viewBox="0 0 14 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 0C3.134 0 0 3.134 0 7C0 12 7 20 7 20C7 20 14 12 14 7C14 3.134 10.866 0 7 0ZM7 10C5.343 10 4 8.657 4 7C4 5.343 5.343 4 7 4C8.657 4 10 5.343 10 7C10 8.657 8.657 10 7 10Z"
                fill="#666666"
              />
            </svg>
          </span>
          <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className="headline__actions-input"
            placeholder="Find the place to help"
          />
          <button className="headline__actions-btn">Search</button>
        </div>
      </div>
      <div className="headline__banner">
        <img src={parrot} alt="Parrot" className="headline__banner-parrot" />
        <img src={members} alt="Members" className="headline__banner-members" />
      </div>
    </section>
  );
};

export default HeadLine;
