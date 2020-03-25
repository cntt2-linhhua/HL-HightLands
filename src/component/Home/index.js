import React, { Component } from 'react';
import TopHome from './topHome';
import BottomHome from './bottomHome';

class Home extends Component {
  render() {
    return (
      <div>
        <TopHome />
        <BottomHome />
      </div>
    );
  }
}

export default Home;