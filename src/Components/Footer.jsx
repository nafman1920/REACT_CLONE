// Components/Footer.jsx
import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column logo-column">
          <div className="logo-circle"></div>
        </div>

        <div className="footer-column">
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
        </div>

        <div className="footer-column">
          <p>0800 534 5181</p>
          <p><a href="mailto:info@brilworx.com">info@brilworx.com</a></p>
        </div>

        <div className="footer-column">
          <p>Company Reg<br />10663197</p>
          <p>VAT Reg<br />264115131</p>
        </div>

        <div className="footer-column follow-us">
          <h3>FOLLOW US</h3>
          <p>Don't forget to follow our news, updates and activities.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaGooglePlusG /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
