import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

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
      <header>
        {/* <div className="hamburger-menu" onClick={this.Handleclick}>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
        <div className="logo-container">
          <Link to='/'>
            <h4 className='logo'>E-Classmate</h4>
          </Link>
        </div>

        <nav>
          <ul className="nav-links">
            <Link to="/">
              <a>
                <li className="light-speed-in">Contact</li>
              </a>
            </Link>
            <Link to="/">
              <a>
                <li className="light-speed-in">About</li>
              </a>
            </Link>
            <Link to="/signup">
              <a>
                <li className="light-speed-in">Log in</li>
              </a>
            </Link>
          </ul>
        </nav>
      </header>
  );
}
