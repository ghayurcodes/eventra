import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Eventra</div>

        <ul className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#events" onClick={() => setMobileMenuOpen(false)}>Events</a></li>
          <li><a href="#map" onClick={() => setMobileMenuOpen(false)}>Map</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <div className={`bar ${mobileMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${mobileMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${mobileMenuOpen ? "change" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
