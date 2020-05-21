import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import BookDetails from "./components/Books/BookDetails"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route  exact path='/' component={Dashboard} />
          <Route  exact path='/bookdetails/:id' component={BookDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
