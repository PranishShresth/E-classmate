import React from "react";
import "./registration.css";

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
      <div className="container">
        <div className="col-md-6 mx-auto text-center">
          <div className="header-title">
            <h1 className="wv-heading--title">E-Classmate</h1>
            <h2 className="wv-heading--subtitle">
              Sign Up to Get Access to our Virtual Classrooms.
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="myform form ">
              <form onSubmit={this.handleSubmit} method="post" name="login">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    className="form-control my-input"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="password"
                    className="form-control my-input"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div className="text-center ">
                  <button
                    type="submit"
                    className=" btn btn-block send-button tx-tfm"
                  >
                    Create Your Free Account
                  </button>
                </div>
                <div className="col-md-12 ">
                  <div className="login-or">
                    <hr className="hr-or" />
                    <span className="span-or">or</span>
                  </div>
                </div>

                <div className="form-group">
                  <a className="btn btn-block g-button">
                    <i className="fa fa-google"></i> Sign up with Google
                  </a>
                </div>
                <p className="small mt-3">
                  By signing up, you are indicating that you have read and agree
                  to the <a className="ps-hero__content__link">Terms of Use</a>{" "}
                  and <a>Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
