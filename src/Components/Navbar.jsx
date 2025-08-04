// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/bril-logo.svg';
import './Styles/Nav.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <NavLink to="/" className='navbar-logo'>
          <img src={logo} alt="Bril Logo" />
        </NavLink>
      </div>

      <div className='navbar-right'>
        <NavLink className='navbar-link' to="/theway">The Way</NavLink>
        <NavLink className='navbar-link' to="/thewhy">The Why</NavLink>
        <NavLink className='navbar-link' to="/theus">The Us</NavLink>
        <NavLink className='navbar-link' to="/thehow">The How</NavLink>
      </div>

      <div className={`navbar-hidden ${isOpen ? 'open' : 'closed'}`}>
        <NavLink className='navbar-link' to="/theway" onClick={toggleNav}>The Way</NavLink>
        <NavLink className='navbar-link' to="/thewhy" onClick={toggleNav}>The Why</NavLink>
        <NavLink className='navbar-link' to="/theus" onClick={toggleNav}>The Us</NavLink>
        <NavLink className='navbar-link' to="/thehow" onClick={toggleNav}>The How</NavLink>
      </div>

      <div className='hamburger' onClick={toggleNav}>
        {isOpen ? "✕" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
