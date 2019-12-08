import React, { Component } from "react";
import Landingimage from "./images/landing.svg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Forms from "../Form/form";
import Header from "../Header/header";

import "./landing.css";

const Secondpage = () => {
  return (
    <div className="secondpage-container" id="second-section">
      <div className="secondpage-leftcontent">
        <h1>What's this?</h1>
        <h5>
          E-classmate is an online platform where you can create your own virual
          classroom and share assignments and notes among friends
        </h5>
        <ul className="bullet-lists">
          <li>Create or join a classroom</li>
          <li>
            Request for assignments or notes on specific with or without
            deadline
          </li>
          <li>Upvote for the topic you need most.</li>
          <li>
            Nrowse through assignments and notes shared by classmates of the
            same topic
          </li>
          <li>Download or read online</li>
          <li>Discuss about study on chat rooms</li>
        </ul>
      </div>
      <div className="secondpage-rightcontent">
        {/* <img src={Classroom} alt=""></img> */}
        <Button
          variant="contained"
          color="primary"
          id="button-create-classroom"
        >
          Create Classroom
        </Button>
      </div>
    </div>
  );
};

const ThirdSection = () => {
  return (
    <div className="thirdsection-container">
      <div className="thirdsection-leftside">
        <h1>Features:</h1>
        <ul className="bullet-lists">
          <li>Own Classroom</li>
          <li>Request for assignments and notes</li>
          <li>Ask questions and discuss</li>
          <li>Chatroom</li>
        </ul>
      </div>
      <div className="thirdsection-rightside">
        <Link to="../Sign-up/registration">
          <Button variant="contained" color="primary" id="sign-up-button">
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Footer = () => {
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
};
export default class Landing extends Component {
  render() {
    return (
      <div className="landing-main-container">
        <div className="landing-container">
          <Header />
          <main>
            <div className="first-section-container">
              <div className="image-container">
                <img src={Landingimage} alt="" />
              </div>
              <div className="main-container">
                <div className="content-container">
                  <h1>Share, Manage</h1>
                  <h3>Notes, Assignments</h3>
                  <h6>Among Friends</h6>
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  id="button-join-classroom"
                >
                  Join our Classroom
                </Button>
              </div>
              <a href="#second-section">
                <i
                  className="fas fa-angle-down fa-3x swing"
                  style={{ color: "#ffffff" }}
                ></i>
              </a>
            </div>
            <section>
              <Secondpage />
            </section>
            <hr />
            <section>
              <ThirdSection />
            </section>
            <hr />
            <section className='form-section'>
              <h1>Get in Touch</h1>
              <h6 style={{ color: "black" }}>
                Want to get in touch? We'd love to hear from you.
              </h6>
              <Forms />
            </section>
          </main>
        </div>

        <Footer />
      </div>
    );
  }
}
