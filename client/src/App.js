import React, { Component } from "react";
import Pulls from "./components/pulls";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Switch>
            <Route path="/" component={Pulls}></Route>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
