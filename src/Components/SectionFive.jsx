// Components/SectionFive.jsx
import React from 'react';
import './SectionFive.css';

const SectionFive = () => {
  return (
    <section className="how-section">
      <div className="how-container">
        <div className="how-image">
          <img src="/circle-logo.svg" alt="Decorative Icon" />
        </div>
        <div className="how-text">
          <span className="how-label">WHATEVER YOU NEED</span>
          <h2 className="how-title">THE HOW</h2>
          <p className="how-subtitle">
            Stop blending in with the crowd and start leaving your mark on the web.
          </p>
          <button className="how-button">LETS TALK ABOUT YOUR PROJECT</button>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
