import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as ROUTES from  '../Router/routers'
import Home from '../Home';
import About from '../About';
import News from '../News';

class Routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route exact path={ROUTES.ABOUT} component={About}/>
          <Route exact path={ROUTES.NEWS} component={News}/>
          {/* <Route exact path={ROUTES.MENUCATEGORY} component={MenuCategory}/> */}
          {/* <Route exact path={ROUTES.NEWS} component={}/> */}
        </Switch>
      </div>
    );
  }
}

export default Routers;