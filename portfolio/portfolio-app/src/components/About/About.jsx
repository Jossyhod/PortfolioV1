import React from 'react'
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.about}>
        <div className={styles.aboutleft}>
          <p>A LITTLE ABOUT ME!</p>
          <div className={styles.box}>
          <div className={styles.image1}>
            <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1693076837/Joseph-removebg-preview_vayj27.png" />
          </div>
          <div className={styles.image2}>
            <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1701782429/Profile_Image_2-removebg-preview_tzqsuf.png" />
          </div>
          </div>
          
        </div>
        <div className={styles.aboutright}>
          <h4>
            Hey! My name is Joseph and I'm a fullstack React.js/Node.js
            developer from Lagos, Nigeria. I am a Problem Solver. Passionate about
            crafting solutions to complex problems. Expertise in front-end and
            back-end development.
          </h4>
          <p>
            My favorite technologies right now are: Javascript, React.js,
            Node.js, and MongoDB
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
