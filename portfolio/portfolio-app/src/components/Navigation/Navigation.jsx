import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_logo}>
        <i>
          <h3>
            <a
              href="https://www.linkedin.com/in/jossyhod/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ...Let's Connect
            </a>
          </h3>
        </i>
      </div>
      <ul className={styles.nav_ul}>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact" smooth>
            Contact
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/work">Work</Link>
        </li>
        <li>
          {" "}
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          {" "}
          <Link to="/passion">Passion</Link>
        </li>
      </ul>

      <div className={styles.menubar} onClick={toggleSidebar}>
        <img
          src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/menu_rljc50.png"
          alt=""
        />
      </div>

      {isSidebarOpen && (
        <div className={`${styles.sidebar_container} ${isSidebarOpen ? styles.open : ""}`}>
          <ul className={styles.sidebar}>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Work</li>
            <li>Experience</li>
            <li>Passion</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
