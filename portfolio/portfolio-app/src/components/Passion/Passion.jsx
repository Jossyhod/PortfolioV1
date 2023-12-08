import React from "react";
import styles from "./Passion.module.css";

const Passion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>THINGS I AM PASSIONATE ABOUT</h2>
        <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700572637/Smiley-removebg-preview_1_jvzoee.png" />
      </div>
      <section className={styles.passion}>
        <div className={styles.passionbox}>
          <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700575053/Frontend-removebg-preview_taxn44.png" />
          <h3>FrontEnd Development</h3>
          <p>
            I love to make things on the web and the creative outlet it provides
            and the opportunity to put my programming skills to work, I also
            enjoy bringing ideas to life in the browser, which are suitable for
            the client to see.
          </p>
        </div>

        <div className={styles.passionbox}>
          <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700575053/backend-removebg-preview_dyubar.png" />
          <h3>BackEnd Development</h3>
          <p>
            "My passion for backend development is like the heartbeat of every
            well-architected system, pumping life into databases, breathing
            logic into algorithms, and crafting seamless experiences for users."
          </p>
        </div>
        <div className={styles.passionbox}>
          <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700575053/Mentor-removebg-preview_mopgx1.png" />
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
