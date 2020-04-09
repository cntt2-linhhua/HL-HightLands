import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./component/Header/Headers";
import Footer from "./component/Footer"
import Routers from "./component/Router";



function App() {
  return (
    <Router>
     <Header />
      <Routers />
      <Footer />
    </Router>
  );
}

export default App;
