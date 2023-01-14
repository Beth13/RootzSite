import React from "react";

import "../../styles/footer.scss";

import twitterLogo from "../../img/Twitter.svg";
import facebookLogo from "../../img/Facebook.svg";
import linkedinLogo from "../../img/LinkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__navigation">
        <div className="footer__navigation-contacts">
          <h3 className="footer__navigation-title__contacts">Contacts</h3>
          <span className="footer__navigation-item">
            2019 Rootz Foundation.
          </span>
          <span className="footer__navigation-item"> All rights reserved</span>
        </div>
        <div className="footer__navigation-headquarters">
          <h3 className="footer__navigation-title">Headquarters</h3>
          <span className="footer__navigation-item">1234 Taliban </span>
          <span className="footer__navigation-item">
            Los Angeles, La 1234567
          </span>
          <span className="footer__navigation-item">(123) 456-7890</span>
        </div>
        <div className="footer__navigation-social">
          <h3 className="footer__navigation-title">Social media</h3>
          <a
            href="https://twitter.com"
            target="_blank"
            className="footer__navigation-social__item"
          >
            <img src={twitterLogo} alt="Twitter Link" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="footer__navigation-social__item"
          >
            <img src={facebookLogo} alt="Facebook Link" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="footer__navigation-social__item"
          >
            <img src={linkedinLogo} alt="LinkedIn Link" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
