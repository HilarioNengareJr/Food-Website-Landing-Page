import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Header />
       <Hero />
      </React.Fragment>
    );
  }
}

export default App;
