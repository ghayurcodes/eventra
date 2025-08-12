import React from "react";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover events happening around you in Pakistan</h1>
        <p>Find exciting concerts, exhibitions, meetups, and more happening near you.</p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="Search events or cities..."
          />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
