import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/bril-logo.svg';
import { useState } from 'react';
import './Styles/Nav.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleNav = () => {
    setIsOpen(!isOpen)
  }


  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <NavLink to="/" className='navbar-logo' ><img src={logo} alt="Bril Logo" /></NavLink>
      </div>
      <div className='navbar-right' >
        <NavLink className='navbar-link' to="/theway" >The Way</NavLink>
        <NavLink className='navbar-link' to="/thewhy" >The Why</NavLink>
        <NavLink className='navbar-link' to="/theus" >The Us</NavLink>
        <NavLink className='navbar-link' to="/thehow" >The How</NavLink>
      </div>

      <div style={{display: isOpen? "block": "none"}} className='navbar-hidden' >
        <NavLink className='navbar-link' to="/theway" >The Way</NavLink>
        <NavLink className='navbar-link' to="/thewhy" >The Why</NavLink>
        <NavLink className='navbar-link' to="/theus" >The Us</NavLink>
        <NavLink className='navbar-link' to="/thehow" >The How</NavLink>
      </div>

      <div onClick={toggleNav} className='hamburger'>{isOpen?"X": "="}</div>
    </nav>
  );
};

// const navStyle = {
//   position: 'sticky',
//   top: 0,
//   zIndex: 1000,
//   backgroundColor: '#FFD940',
//   padding: '12px 32px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// };

// const leftStyle = {
//   display: 'flex',
//   alignItems: 'center',
// };

// const rightStyle = {
//   display: 'flex',
//   gap: '32px',
//   alignItems: 'center',
// };

// const logoStyle = {
//   height: '40px',
// };

// const linkStyle = ({ isActive }) => ({
//   textDecoration: 'none',
//   color: isActive ? '#1c1c3f' : '#666', // active style
//   fontWeight: 'bold',
//   fontSize: '16px',
// });

export default Navbar;
