import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";



const Navigation = () => {
    return (
        <div className={styles.nav_bar}>
          <div className={styles.nav_logo}>
             <i><h3><Link target="_blank" to={"https://www.linkedin.com/in/jossyhod/"}>...Let's Connect</Link></h3></i>
          </div>
          <ul className={styles.nav_ul}>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="contact"smooth>Contact</Link></li>
            <li> <Link to={"/about"}>About</Link></li>
            <li> <Link to={"/work"}>Work</Link></li>
            <li> <Link to={"/experience"}>Experience</Link></li>
            <li> <Link to={"/passion"}>Passion</Link></li>
          </ul>
             
          <div className={styles.menubar}><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/menu_rljc50.png" alt=""/></div>
          

        </div>
      );
}

export default Navigation
