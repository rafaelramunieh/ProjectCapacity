import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="navbar-container">
        <Logo />
        <div
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`navbar-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#benefits" onClick={() => setIsOpen(false)}>
                Benefits
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setIsOpen(false)}>
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="cta-link"
              >
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
