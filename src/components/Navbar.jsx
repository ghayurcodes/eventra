import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Button from "./button";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("✅ Logged out successfully!");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

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
          <li>
            <a href="#events" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileMenuOpen(false);
            }}> Home</a>
          </li>
          {
            user && <li>
              <Link to="/add" onClick={() => setMobileMenuOpen(false)}>Add</Link>
            </li>


          }


          <li><a href="#events" onClick={() => setMobileMenuOpen(false)}>Events</a></li>

          <li>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            </li>


          {user ? (
            <Button text="Logout" bgColor="#FF0000" fgColor="white" onhov="#C6011F" onclick={handleLogout} />
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
