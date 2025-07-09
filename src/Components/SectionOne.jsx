import React from 'react';
import './SectionOne.css';

const SectionOne = () => (
  <section id="the-way" className="section-one">
    <div className="container">
      <div className="icon-wrapper">
        <div className="outer-circle">
          <div className="inner-circle">
            <div className="pupil"></div>
          </div>
        </div>
      </div>

      <div className="text-content">
        <div className="label">OUR PROCESS</div>
        <h2 className="heading">THE WAY</h2>
        <p className="subtitle">Make the web beautiful.</p>

        <div className="steps">
          <div className="step">
            <h3>DISCUSS</h3>
            <p>Collaboration is key. We want to understand your business and your customers.</p>
          </div>
          <div className="step">
            <h3>DESIGN</h3>
            <p>We’ll create carefully crafted designs.</p>
          </div>
          <div className="step">
            <h3>DELIVER</h3>
            <p>Produce a stunning end product.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SectionOne;
