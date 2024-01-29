import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Promo from  './components/Promo';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Header />
       <Hero />
       <Promo />
       <About />
      </React.Fragment>
    );
  }
}

export default App;
