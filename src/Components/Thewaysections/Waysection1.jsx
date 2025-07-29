import React from 'react';
import '../Thewaystyles/waysection1.css';

const WaySection1 = () => {
  return (
    <section className="way-section1">
      <div className="way-section1__left">
        <span className="way-section1__label">WE LIVE IN A DIGITAL WORLD</span>
        <h1 className="way-section1__title">
          ONLINE <br />
          PRESENCE IS <br />
          ESSENTIAL
        </h1>
      </div>

      <div className="way-section1__right">
        <div className="way-section1__item">
          <h3 className="way-section1__item-title">AUTHENTICITY</h3>
          <p className="way-section1__item-desc">
            Interactions between customers and brands must be authentic, part of a dialogue and interconnected.
          </p>
        </div>

        <div className="way-section1__item">
          <h3 className="way-section1__item-title">ENGAGE</h3>
          <p className="way-section1__item-desc">
            Websites need be engaging to hold the users’ attention and for them to want to dig a little deeper.
          </p>
        </div>

        <div className="way-section1__item">
          <h3 className="way-section1__item-title">IDEAS</h3>
          <p className="way-section1__item-desc">
            Whether you’re starting from scratch or looking for a refresh, our job is to create your idea. You tell us what you like and what you don’t like, we’ll do the rest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaySection1;
