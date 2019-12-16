import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links-container">
          <span className="footer-link" href="#">
            Contact us
          </span>
          <div className="footer-link-bar"></div>
          <span className="footer-link" href="#">
            FAQ
          </span>
          <div className="footer-link-bar"></div>
          <span className="footer-link" href="#">
            Privacy Policy
          </span>
        </div>
        <div className="footer-copyright-container">
          Copyright 2019 . E-Classmate. All rights reserved
        </div>
      </div>
    </footer>
  );
}
