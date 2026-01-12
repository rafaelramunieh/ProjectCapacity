import React from "react";
import "./Navbar.css";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="navbar-container">
        <Logo />
        <div className="menu-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className="navbar-links">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#benefits">Benefits</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact" className="cta-link">
                Order
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
