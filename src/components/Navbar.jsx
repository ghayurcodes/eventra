import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Button from "./button";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import LogoutButton from "./Logout";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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

          
          {user ? (
            <div className="user-info">
              <span className="user-email">{user.email}</span>
              <LogoutButton />
            </div>
          ) : (
            <Link to="/login">
              <Button text="Login" bgColor="var(--primary-color)" fgColor="white" />
            </Link>
          )}
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
