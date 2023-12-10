import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className={styles.container} id={styles.contact}>
      <section className={styles.upperfooter}>
        <img
          className={styles.image}
          src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700846354/Paper_plane_tmtvsz.png" 
          width="80px"
          alt="Paper Plane logo"
        />
        <h2>GET IN TOUCH!</h2>
        <div className={styles.rocket}>
          <h3>
            Have questions or just want to chat with me, feel free to shoot me
            an email
          </h3>
          <img
            src="https://res.cloudinary.com/dfeyofjln/image/upload/v1700846354/Rocket-removebg-preview_waxo14.png"
            width="30px"
            alt="rocket logo"
          />
        </div>
        <a href="mailto: ikeanyi_joseph@yahoo.com">
          <button>Say Hello</button>
        </a>
      </section>

      <section className={styles.lowerfooter}>
        <div className={styles.icons}>
          <a
            href="https://www.facebook.com/ikeanyi.hod?mibextid=ViGcVu"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className={styles.facebook} />
          </a>

          <a href="https://twitter.com/Jossyhod" target="_blank" rel="noreferrer">
            <FaXTwitter className={styles.twitter} />
          </a>
          <a href="https://linkedin.com/in/jossyhod/" target="_blank" rel="noreferrer">
            <FaLinkedin className={styles.linkedin} />
          </a>
          <a href="https://github.com/Jossyhod" target="_blank" rel="noreferrer">
            <FaGithub className={styles.github} />
          </a>
          <a
            href="https://instagram.com/jossy_hod?utm_source=qr&igshid=OWM2ZWI5NDFkNA=="
            target="_blank" rel="noreferrer"
          >
            {" "}
            <FaInstagram className={styles.instagram} />
          </a>
        </div>
        <hr />
        <div className={styles.footerbottom}>
          <span>&#169; </span>
          <i>
            <h2>2023 Joseph IKEANYI</h2>
          </i>
        </div>
      </section>
    </div>
  );
};

export default Footer;
