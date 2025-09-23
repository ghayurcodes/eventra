import React from "react";
import Navbar from "../components/Navbar";
import styles from "./About.module.css"; // CSS Module import

const About = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      <div className={styles.mainCont}>
        <div className={styles.img}>
          <div className={styles.overlay}></div>
          <h1 className={styles.imgText}>Eventra</h1>
        </div>
        <div className={styles.desc}>
          <h2>Discover. Create. Connect.</h2>
          <p>
            Eventra helps you explore upcoming events, connect with communities,
            and host your own gatherings. From concerts to workshops,
            conferences to meetups – your next experience starts here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
