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
import Publics from '../Publics';
import Contact from '../Contact';
import DetailNews from '../DetailNew';
import Menu from '../Menu';
import Checkout from '../Checkout';
import Product from '../Product';
import Category from '../Category';

class Routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route exact path={ROUTES.ABOUT} component={About}/>
          <Route exact path={ROUTES.NEWS} component={News}/>
          <Route exact path={ROUTES.PUBLIC} component={Publics}/>
          <Route exact path={ROUTES.CONTACT} component={Contact}/>          
          <Route exact path={ROUTES.DETAILNEWS} component={DetailNews}/>
          <Route exact path={ROUTES.MENUCATEGORY} component={Menu}/>
          <Route exact path={ROUTES.CHECKOUT} component={Checkout}/>
          <Route exact path={ROUTES.PRODUCT} component={Product}/>
          <Route  path='/sanpham/:id' component={Category} />
          {/* <Route path='/sanpham/:id' render={()=>(<Category catePro= {this.props.catePro} />)}/> */}
          {/* <Route exact path={ROUTES.CATEGORY} component={Category}/> */}
          {/* <Route exact path={ROUTES.NEWS} component={}/> */}
        </Switch>
      </div>
    );
  }
}

export default Routers;