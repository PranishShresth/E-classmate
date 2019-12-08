import React from "react";
import "./registration.css";
import Header from "../Header/header";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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

  render() {
    return (
      <div className="Authetication-form-container">
        <Header />
        <div className="registration-container">
          <div className="form-container">
            <div className="registration-image"></div>
            <div className="form-contents">
              <form method="POST">
                <h1>LogIn</h1>
                <div className="icon">
                  <i
                    class="fas fa-sign-in-alt fa-2x"
                    style={{
                      display: "inline-block",
                      width: "100%",
                      textAlign: "center"
                    }}
                  ></i>
                </div>
                <TextField required id="email" label="Email" fullWidth={true} />
                <TextField
                  required
                  id="password"
                  label="Password"
                  fullWidth={true}
                />
                <Button
                  type="Submit"
                  id="submit"
                  variant="contained"
                  color="primary"
                >
                  Log in
                </Button>
                <p style={{ textAlign: "center" }}>OR</p>
                <Button
                  type="Submit"
                  id="submit"
                  variant="contained"
                  color="secondary"
                >
                  Log In with Google
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
