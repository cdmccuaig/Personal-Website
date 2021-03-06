import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./views/Home";
import Telus from "./views/Telus";
import { RoutesEnum } from "./constants/interfaces";

class App extends Component<any, any> {
  public render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={RoutesEnum.HOME} component={Home} />
            <Route exact path={RoutesEnum.TELUS} component={Telus} />
            <Route render={() => <Redirect to={RoutesEnum.HOME} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
