import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links-container">
          <a className="footer-link" href="#">
            Contact us
          </a>
          <div className="footer-link-bar"></div>
          <a className="footer-link" href="#">
            FAQ
          </a>
          <div className="footer-link-bar"></div>
          <a className="footer-link" href="#">
            Privacy Policy
          </a>
        </div>
        <div className="footer-copyright-container">
          Copyright 2019 . E-Classmate. All rights reserved
        </div>
      </div>
    </footer>
  );
}
