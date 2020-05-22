import React from "react";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import BookDetails from "./components/Books/BookDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/bookdetails/:id" component={BookDetails} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
