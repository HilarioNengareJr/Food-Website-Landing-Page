import React, { Component } from 'react';
import './sectionDivider.css';

class SectionDivider extends Component {
  render() {
    return (
      <section className="section section-divider white cta" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="container">
          <div className="cta-content">
            <h2 className="h2 section-title">
              The Foodie Have Excellent Of
              <span className="span">Quality Burgers!</span>
            </h2>
            <p className="section-text">
              The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.
            </p>
            <button className="btn btn-hover">Order Now</button>
          </div>
          <figure className="cta-banner">
            <img src="/images/cta-banner.png" width="700" height="637" loading="lazy" alt="Burger" className="w-100 cta-img" />
            <img src="/images/sale-shape.png" width="216" height="226" loading="lazy" alt="get up to 50% off now" className="abs-img scale-up-anim" />
          </figure>
        </div>
      </section>
    );
  }
}

export default SectionDivider;
