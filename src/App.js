import React, { Component } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Promo from  './components/Promo';
import About from './components/About';
import Menu from './components/Menu';
import './App.css';
import SectionDivider from './components/sectionDivider';
import Delivery from './components/Delivery';
import Testimonials from './components/Testimonials';
import BannerSection from './components/BannerSection';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Backtop from './components/BackTop';

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Header />
       <Hero />
       <Promo />
       <About />
       <Menu />
       <SectionDivider />
       <Delivery />
       <Testimonials />
       <BannerSection />
       <Blog />
       <Footer />
       <Backtop />
      </React.Fragment>
    );
  }
}

export default App;
