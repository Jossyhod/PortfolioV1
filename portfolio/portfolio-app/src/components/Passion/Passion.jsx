import React from "react";
import styles from "./Passion.module.css";

const Passion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>THINGS I AM PASSIONATE ABOUT</h2>
        <img
          src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700572637/Smiley-removebg-preview_1_jvzoee.png"
          alt=""
        />
      </div>
      <section className={styles.passion}>
        <div className={styles.passionbox}>
          <img
            src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700575053/Frontend-removebg-preview_taxn44.png"
            alt=""
          />
          <h3>FrontEnd Development</h3>
          <p>
            I'm enthusiastic about creating web-based projects and utilizing my
            programming skills as a creative outlet. Bringing ideas to life in
            the browser for clients is genuinely fulfilling for me.
          </p>
        </div>

        <div className={styles.passionbox}>
          <img
            src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700575053/backend-removebg-preview_dyubar.png"
            alt=""
          />
          <h3>BackEnd Development</h3>
          <p>
            The core of my commitment to backend development echoes akin to the
            rhythm of a well-architected system, injecting life into databases,
            embedding logic into algorithms, and crafting seamless experiences
            for users.
          </p>
        </div>
        <div className={styles.passionbox}>
          <img
            src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700575053/Mentor-removebg-preview_mopgx1.png"
            alt=""
          />
          <h3>Mentorship</h3>
          <p>
            My greatest passion lies in contributing to the community.
            Consequently, I find joy in assisting individuals facing coding
            challenges and mentoring aspiring young coders as a way of giving
            back.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Passion;
