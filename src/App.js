import React, { Component } from 'react';
import Header from './components/Header';
import Products from './components/ProductListing';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Header />
       <Products />
      </React.Fragment>
    );
  }
}

export default App;
