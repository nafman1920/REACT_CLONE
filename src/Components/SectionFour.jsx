import React from "react";
import './SectionFour.css';

const SectionFour = () => (
  <section className="about-section">
    <div className="about-content">
      <div className="about-icon">
        <img src="/info-icon.svg" alt="Info Icon" />
      </div>
      <h2 className="about-title">ABOUT US</h2>
      <p className="about-subtitle">
        We work with everyone, big or small, and we want to find the best solution for you.
      </p>
      <button className="about-button">GET TO KNOW US</button>
    </div>
  </section>
);

export default SectionFour;
