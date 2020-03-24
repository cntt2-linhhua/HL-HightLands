import React, { Component } from 'react';
import Header from '../Header/';
import TopHome from './topHome';
import BottomHome from './bottomHome';
import Footer from '../Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <TopHome />
        <BottomHome />
      </div>
    );
  }
}

export default Home;