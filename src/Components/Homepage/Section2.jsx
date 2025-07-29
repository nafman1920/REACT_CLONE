import React from 'react';
import "../Styles/SectionTwo.css";

const SectionTwo = () => (
  <section id="features" className="section-two">
    <div className="section-two__container">
      <div className="section-two__label">RESPONSIVE DESIGN</div>
      <h2 className="section-two__heading">FEATURES</h2>
      <p className="section-two__description">
        Increasingly, people are viewing the web on a variety of devices – tablets, smartphones, and other mobile devices. If your website doesn’t support them then you could be missing out.
      </p>

      <div className="section-two__features">
        <div className="feature">
          <div className="icon phone"></div>
          <p className="feature-label">MOBILE READY</p>
        </div>
        <div className="feature">
          <div className="icon tablet"></div>
          <p className="feature-label">100% RESPONSIVE</p>
        </div>
        <div className="feature">
          <div className="icon laptop"></div>
          <p className="feature-label">RETINA READY</p>
        </div>
        <div className="feature">
          <div className="icon desktop"></div>
          <p className="feature-label">FLEXIBLE DESIGN</p>
        </div>
      </div>
    </div>
  </section>
);

export default SectionTwo;
