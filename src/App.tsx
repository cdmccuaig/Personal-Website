import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./views/Home";
import Telus from "./views/Telus";
import iS5 from "./views/iS5";
import { RoutesEnum } from "./constants/interfaces";

class App extends Component<any, any> {
  public render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={RoutesEnum.HOME} component={Home} />
            <Route exact path={RoutesEnum.TELUS} component={Telus} />
            <Route exact path={RoutesEnum.iS5} component={iS5} />
            <Route render={() => <Redirect to={RoutesEnum.HOME} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
