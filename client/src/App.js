import React, { Component } from "react";
import Pulls from "./components/pulls";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Switch>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/" exact component={Pulls}></Route>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
