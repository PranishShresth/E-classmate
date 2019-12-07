import React from "react";
import "./header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "../Landing-page/Landing";

export default function Header() {
  return (
    // Handleclick = () => {
    //   var navlinks = document.querySelector(".nav-links");

    //   if (navlinks.style.display === "none" || navlinks.style.display === "") {
    //     navlinks.style.display = "block";
    //   } else if (navlinks.style.display === "block") {
    //     navlinks.style.display = "none";
    //   }
    // };
    <Router>
      <header>
        {/* <div className="hamburger-menu" onClick={this.Handleclick}>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
        <div className="logo-container">
          <h4>E-Classmate</h4>
        </div>

        <nav>
          <ul className="nav-links">
            <Link to="../Landing-page/Landing">
              <a href="#">
                <li className="light-speed-in">Contact</li>
              </a>
            </Link>
            <a href="#">
              <li className="light-speed-in">About</li>
            </a>
            <a href="#">
              <li className="light-speed-in">Log in</li>
            </a>
          </ul>
        </nav>
      </header>
    </Router>
  );
}
