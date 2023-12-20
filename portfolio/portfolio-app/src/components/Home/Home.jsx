import React from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Home.module.css";
import About from "../About/About";
import Passion from "../Passion/Passion";
import Experience from "../Experience/Experience";
import { Parallax,  } from "react-parallax";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";



const Home = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <section className={styles.container}>
        <div className={styles.content}>
          <img
            src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700230685/Waving-removebg-preview_fknswm.png"
            alt="Waving Emoji"
          />
          <h4>Hi! I'm Joseph</h4>
        </div>
        <div className={styles.title}>
          <p> Full Stack Developer</p>
        </div>
      </section>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.passion}>
        <Passion />
      </div>
      <div className={styles.experience}>
        <Experience />
      </div>

      <Parallax className={styles.image}
        // blur={5}
        bgImage="https://res.cloudinary.com/dfeyofjln/image/upload/v1701264465/laptop_work_station_ae3vfb.jpg"
        strength={400}
      >
        <div className={styles.parallaxcontent}>
          <span>Check out my résumé!</span>
          <a  href="https://drive.google.com/file/d/11zaFTIEQKJrlAmbDGFWn4kSdds5MjGVV/view" target="_blank" rel="noreferrer"><button>Click To View</button></a> 
        </div>
      </Parallax>
      <div>
        <Work />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
