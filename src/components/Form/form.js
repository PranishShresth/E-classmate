import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./form.css";

export default class Forms extends Component {
  state = {
    email: "",
    subject: "",
    message: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="form-controls">
        <div className="form-rightside">
          <div className="form-container">
            <form
              className="contact-form"
              noValidate
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <TextField
                required
                id="email"
                label="Email"
                fullWidth={true}
                onChange={this.handleChange}
                value={this.state.email}
              />
              <TextField
                required
                id="subject"
                label="Subject"
                fullWidth={true}
                onChange={this.handleChange}
                value={this.state.subject}
              />
              <TextField
                required
                id="message"
                label="Message"
                fullWidth={true}
                onChange={this.handleChange}
                value={this.state.message}
              />
              <Button
                type="Submit"
                id="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div className="form-leftside">
          <div></div>
        </div>
      </div>
    );
  }
}
