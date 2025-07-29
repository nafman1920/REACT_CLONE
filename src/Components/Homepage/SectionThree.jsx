import React from 'react';
import "../Styles/SectionThree.css"; // Adjust the path as necessary

const SectionThree = () => (
  <section className="services-section">
    <div className="services-header">
      <div className="services-logo">
        <div className="logo-middle">
          <div className="logo-inner" />
        </div>
      </div>
      <div className="services-text">
        <span className="services-label">WHATEVER YOU NEED</span>
        <h2 className="services-title">SERVICES</h2>
        <p className="services-subtitle">
          We want to make your company stand out, because first impressions count.
        </p>
      </div>
    </div>

    <div className="services-grid">
      <div className="service-card">
        <h3 className="service-title">WEB DESIGN</h3>
        <p className="service-desc">Always look fresh with sharp designs and stunning layouts.</p>
      </div>
      <div className="service-card">
        <h3 className="service-title">WEB DEVELOPMENT</h3>
        <p className="service-desc">
          Flexible, secure and innovative back end development that makes your site tick.
        </p>
      </div>
      <div className="service-card">
        <h3 className="service-title">DOMAIN REGISTRATION</h3>
        <p className="service-desc">Find the right domain to fit your company</p>
      </div>
      <div className="service-card">
        <h3 className="service-title">HOSTING</h3>
        <p className="service-desc">
          We’ll set up a hosting solution for you to give you peace of mind.
        </p>
      </div>
    </div>
  </section>
);

export default SectionThree;
