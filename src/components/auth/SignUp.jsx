import React, { Component } from "react";
import "App.css";

class SignUp extends Component {
  register() {
    console.warn("state", this.state);
    fetch("http://127.0.0.1:5000/user/signUp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        localStorage.setItem("auth", JSON.stringify(resp));
      });
    });
  }
  render() {
    return (
      <div className="signupform">
        <form className="signup">
          <label>
            <input
              className="input"
              type="text"
              placeholder="firstName"
              onChange={(e) => {
                this.setState({ firstName: e.target.value });
              }}
            />{" "}
            <br />
            <b />
          </label>
          <label>
            <input
              type="text"
              placeholder="lastName"
              onChange={(e) => {
                this.setState({ lastName: e.target.value });
              }}
            />{" "}
            <br />
            <b />
          </label>
          <label>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />{" "}
            <br />
            <b />
          </label>
          <label>
            <input
              type="text"
              placeholder="roles"
              onChange={(e) => {
                this.setState({ roles: e.target.value });
              }}
            />{" "}
            <br />
            <b />
          </label>
          <label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />{" "}
            <br />
            <b />
          </label>
          </form>
          <button className="myregbutton" onClick={(e) => this.register()}>
            <span>Registration</span>
          </button>
        
      </div>
    );
  }
}
export default SignUp;
