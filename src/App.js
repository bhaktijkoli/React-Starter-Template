import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header.jsx';
import Content from './Components/Content.jsx';
import Products from './Components/Products.jsx';
import Pricing from './Components/Pricing.jsx';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Route exact path="/" component={Content}/>
        <Route path="/products" component={Products}/>
        <Route path="/pricing" component={Pricing}/>
      </div>
    );
  }
}

export default App;
