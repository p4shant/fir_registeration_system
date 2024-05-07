import React from 'react';
import  '../css/navbar.css';
import logo from '../image/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
        <img src={logo} alt="Logo" className="navbar-logo-image" />
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/complaint">Complaint</a>
        </li>
        <li>
          <a href="/feedback">Feedback</a>
        </li>
      </ul>
      <div className="navbar-login">
        <a href="/login">Login/Register</a>
      </div>
    </nav>
  );
};

export default Navbar;