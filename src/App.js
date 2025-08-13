import React, { useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import './App.css';
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import EventsSection from "./components/EventsSection";
import MapComponent from "./components/MapComponent";

function App() {
  // useEffect(() => {
  //   const testFirestore = async () => {
  //     try {
  //       // Add a sample document
  //       const docRef = await addDoc(collection(db, "testCollection"), {
  //         name: "Eventra Test",
  //         createdAt: new Date()
  //       });
  //       console.log("Document written with ID: ", docRef.id);

  //       // Fetch all docs from that collection
  //       const querySnapshot = await getDocs(collection(db, "testCollection"));
  //       querySnapshot.forEach((doc) => {
  //         console.log(`${doc.id} =>`, doc.data());
  //       });

  //       alert("Firestore connection works! Check your console for results.");
  //     } catch (error) {
  //       console.error("Error testing Firestore:", error);
  //       alert("Firestore test failed. Check console.");
  //     }
  //   };

  //   testFirestore();
  // }, []);

  return (
    <div className="app">

      <Navbar />
      <HeroSection />
      <EventsSection/>
      <MapComponent/>
      
    </div>

  );
}


export default App;
