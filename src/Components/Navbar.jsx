import React from 'react';
import logo from '../assets/bril-logo.svg'; // ✅ Make sure the path and name are correct

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={leftStyle}>
        <img src={logo} alt="Bril Logo" style={logoStyle} />
      </div>
      <div style={rightStyle}>
        <a href="#the-way" style={linkStyle}>The Way</a>
        <a href="#the-why" style={linkStyle}>The Why</a>
        <a href="#the-us" style={linkStyle}>The Us</a>
        <a href="#the-how" style={linkStyle}>The How</a>
      </div>
    </nav>
  );
};

const navStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  backgroundColor: '#FFD940',
  padding: '12px 32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const leftStyle = {
  display: 'flex',
  alignItems: 'center',
};

const rightStyle = {
  display: 'flex',
  gap: '32px',
  alignItems: 'center',
};

const logoStyle = {
  height: '40px', // adjust as needed
};

const linkStyle = {
  textDecoration: 'none',
  color: '#1c1c3f',
  fontWeight: 'bold',
  fontSize: '16px',
};

export default Navbar;
