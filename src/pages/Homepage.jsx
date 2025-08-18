import React from 'react'
import Navbar from "../components/Navbar"
import HeroSection from "../components/Hero";
import EventsSection from "../components/EventsSection";
import MapComponent from "../components/MapComponent";
import Footer from "../components/Footer";
import "./Homepage.css"

const Homepage = () => {
  return (
    <div>
        <Navbar/>
      <HeroSection />
      <EventsSection/>
      <MapComponent name="lol"/>
      <Footer/>
      
    </div>
  )
}

export default Homepage
