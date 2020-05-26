import React, { Component } from "react";
import "App.css";

class SignIn extends Component {
  login() {
    console.warn("state", this.state);
    fetch("http://127.0.0.1:5000/user/signIn", {
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
      <div>
        <form className="signin">
          <label>
            {" "}
            <input
              className="input"
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
              className="input"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />{" "}
            <br />
            <b />
            
          </label>
          </form>
          <br />
          <button className="mylogbutton" onClick={(e) => this.login()}>
            <span>Login</span>
          </button>
        
      </div>
    );
  }
}
export default SignIn;
