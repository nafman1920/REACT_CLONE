import React from "react";
import { FaGlobe } from "react-icons/fa"; // FontAwesome globe or web icon
import "../Thewaystyles/Waysection5.css";

const WaySection5 = () => {
  return (
    <section className="waysection5">
      <div className="waysection5-container">
        <div className="waysection5-icon">
          <FaGlobe />
        </div>
        <div className="waysection5-text">
          <h1>
            DOMAIN SEARCH &<br /> REGISTRATION
          </h1>
          <p>
            We will work with you to find a domain to fit your business and even help you register it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaySection5;
