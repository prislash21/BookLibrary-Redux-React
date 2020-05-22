import React, { Component } from 'react'

 class SignIn extends Component {
    login() {
        console.warn("state", this.state);
        fetch("http://127.0.0.1:5000/user/signIn",{
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
            <form>
                
            <label>
            {" "}
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
              type="password"
              placeholder="Password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />{" "}
            <br />
            <b />
          </label>
          <button className="btn pink lighten-1 z-depth-0" onClick={(e) => this.login()}>
            <span>Login</span>
          </button>
                   
                </form>
            </div>
        )
    }
}
export default SignIn