import React, { useEffect } from 'react'
import Navbar from "../components/Navbar"
import HeroSection from "../components/Hero";
import EventsSection from "../components/EventsSection";
import MapComponent from "../components/MapComponent";
import Footer from "../components/Footer";
import "./Homepage.css"


const Homepage = () => {


 useEffect(() => {
   console.log("hello")
  
 }, [])
 

  


  
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <EventsSection/>
      <MapComponent/>
      <Footer/>
    </div>
  )
}

export default Homepage
