import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./component/Header";
import Routers from "./component/Router";
import Footer from "./component/Footer";

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
