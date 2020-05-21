import React, { Component } from "react";
import Notification from "./Notifications";
import Booklist from "../Books/Booklist";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col s12 m6">
              <Booklist />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}
