import React from "react";
import "./registration.css";
import { Header, Footer } from "../../links/links";
import Blue from "./blue.jpg";
import { TextField, Button, Checkbox } from "@material-ui/core";

// import LockOpenIcon from "@material-ui/icons/LockOpen";

// const styles = {
//   largeIcon: {
//     width: 60,
//     height: 60
//   }
// };

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  componentDidMount() {
    document.getElementById("sign-in-tab").click();
  }

  HandleTab(id, event) {
    var i, tablinks, tabbutton;
    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.display = "none";
    }
    tabbutton = document.querySelectorAll(".tab-button");
    for (i = 0; i < tablinks.length; i++) {
      tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    event.currentTarget.className += " active";
  }
  render() {
    return (
      <div className="Authetication-form-container">
        <Header />
        <div className="registration-container">
          <div className="form-container">
            <div className="registration-image">
              <img src={Blue} alt=""></img>
              <h6 className='welcome-text'>
                Welcome to
                E&#x2011;Classmate
              </h6>
            </div>
            <div className="form-contents">
              <div className="button-tab-container">
                <Button
                  id="sign-in-tab"
                  className="tab-button"
                  onClick={this.HandleTab.bind(this, "sign-in")}
                >
                  Sign in
                </Button>
                <Button
                  id="sign-up-tab"
                  className="tab-button"
                  onClick={this.HandleTab.bind(this, "sign-up")}
                >
                  Sign up
                </Button>
              </div>


              <form method="POST" id="sign-in" className="tablinks">
                <h1>Sign In</h1>

                <TextField 
                  required 
                  id="email" 
                  label="Email" 
                  fullWidth={true}
                  margin='normal'
                />
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth={true}
                  margin='normal'
                />
                <Button
                  type="Submit"
                  id="submit"
                  variant="contained"
                  color="primary"
                >
                  Sign in
                </Button>
                <p style={{ textAlign: "center" }}>OR</p>
                <Button
                  type="Submit"
                  id="submit"
                  variant="contained"
                  color="secondary"
                >
                  Sign In with Google
                </Button>
              </form>


              <form method="POST" id="sign-up" className="tablinks">
                <h1>Sign Up</h1>

                <TextField 
                  required 
                  id="username" 
                  label="Username" 
                  fullWidth={true}
                  margin='normal' 
                />
                <TextField 
                  required 
                  id="email" 
                  label="Email" 
                  fullWidth={true}
                  margin='normal' 
                />
                <TextField
                  required
                  id="password"
                  label="Password"
                  fullWidth={true}
                  type="password"
                  margin='normal'
                />
                <TextField
                  required
                  id="Confirm-password"
                  label="Confirm Password"
                  fullWidth={true}
                  type="password"
                  margin='normal'
                />
                <div className="ToS">
                  <Checkbox value="checkedB" color="primary" />
                  <p>
                    Click here to indicate you have read and agree to Terms and
                    Conditions of E-Classmate.
                  </p>
                </div>
                <Button
                  type="Submit"
                  id="submit"
                  variant="contained"
                  color="primary"
                >
                  Sign up
                </Button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
