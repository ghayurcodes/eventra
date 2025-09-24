import React from "react";
import Navbar from "../components/Navbar";
import styles from "./About.module.css";

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
          <h1 className={styles.title}>"Your Gateway to Every Event"</h1>
          <h2 className={styles.subtitle}>Discover · Create · Connect</h2>
          <p>
            Eventra is a smart event management platform that helps you discover, create, and join events effortlessly. Designed for both organizers and attendees, Eventra makes planning and participation smooth, engaging, and social.
          </p>
          <ul>
            <li>🔍 Explore upcoming events tailored to your interests</li>
            <li>📝 Create & manage events with a simple dashboard</li>
            <li>👥 Connect & engage with communities and participants</li>
            <li>🔔 Stay updated with instant notifications & reminders</li>
          </ul>
          <p>
            Whether it's a local meetup, a big conference, or a personal gathering — Eventra makes sure you never miss what matters.
          </p>

          <div className={styles.images}>
            <a href="#"><img src="linkedin.png" alt="linkedin" /></a>
            <a href="#"><img src="github.png" alt="github" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
