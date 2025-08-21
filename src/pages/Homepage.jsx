
import Navbar from "../components/Navbar"
import HeroSection from "../components/Hero";
import EventsSection from "../components/EventsSection";
import MapComponent from "../components/MapComponent";
import Footer from "../components/Footer";
import "./Homepage.css"
import LogoutButton from "../components/Logout";


const Homepage = () => {




  


  
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <EventsSection/>
      <MapComponent/>
      <Footer/>
      <LogoutButton/>
    </div>
  )
}

export default Homepage
