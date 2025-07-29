import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import "../Thewaystyles/Waysection4.css"

const WaySection4 = () => {
  return (
    <section className="waysection4">
      <div className="container">
        <div className="icon responsive-icons">
          <FaMobileAlt />
          <FaTabletAlt />
          <FaLaptop />
        </div>
        <div className="text-content">
          <h1>MOBILE RESPONSIVE</h1>
          <h2>Websites that adapt to any device.</h2>
          <p>
            With changes in technology it is important to have a website that is
            dynamic and responsive to any devices it is used on. In recent years,
            smart phones have become the most popular way for people to access
            the web so we will ensure your website is mobile responsive to reach
            the widest target audience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaySection4;

