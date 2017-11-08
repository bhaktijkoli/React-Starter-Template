import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header.jsx';
import Content from './Components/Content.jsx';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
