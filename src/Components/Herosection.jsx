import React from "react";
import manImage from "../assets/bril-man.png";
import { FaHeart, FaEye, FaComments } from "react-icons/fa";
import "../App.css"; // make sure your styles are imported

const Herosection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h2 style={{
          fontSize: "14px",
          backgroundColor: "#1c1c3f",
          color: "white",
          display: "inline-block",
          padding: "6px 12px",
          marginBottom: "20px"
        }}>
          WELCOME TO BRILWORX
        </h2>

        {/* ✅ Wrap h1 and image in a flex container */}
        <div className="hero-heading-wrap">
          <h1 className="hero-heading">
            WE BUILD <br /> JAW-DROPPING <br /> WEBSITES
          </h1>

          <div className="hero-image">
            <img src={manImage} alt="Bril Man" />
          </div>
        </div>

        <p className="hero-tagline">
          Creative website design for start-ups, sole traders & settled businesses.
        </p>

        <div className="hero-buttons">
          <div>
            <FaHeart />
            <h3>COLLABORATE</h3>
            <p>Work collaboratively with supportive designers and create your perfect website.</p>
            <button className="hero-button">CHECK OUR WORK</button>

          </div>
          <div>
            <FaEye />
            <h3>BLOG</h3>
            <p>Explore our blogs to educate and accentuate your online presence.</p>
           <button className="hero-button">READ OUR POSTS</button>
          </div>
          <div>
            <FaComments />
            <h3>CONTACT US</h3>
            <p>Build customizable packages and get your free quote now.</p>
           <button className="hero-button">ASK FOR A QUOTE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
