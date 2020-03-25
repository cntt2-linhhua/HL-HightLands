import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as ROUTES from  '../Router/routers'
import Home from '../Home';
import MenuCategory from '../MenuCategory';

class Routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route exact path={ROUTES.MENUCATEGORY} component={MenuCategory}/>
          {/* <Route exact path={ROUTES.NEWS} component={}/> */}
        </Switch>
      </div>
    );
  }
}

export default Routers;