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
            "My passion for backend development is like the heartbeat of every
            well-architected system, pumping life into databases, breathing
            logic into algorithms, and crafting seamless experiences for users."
          </p>
        </div>
        <div className={styles.passionbox}>
          <img
            src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700575053/Mentor-removebg-preview_mopgx1.png"
            alt=""
          />
          <h3>Mentorship</h3>
          <p>
            Giving back to the community has been my biggest passion. So, I also
            love to give back to the community by helping people who have
            problems in coding and mentor young coders.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Passion;
