import React from "react";
import styles from "./Navigation.module.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
// import Carticon from "./Carticon/Carticon";
// import Favourite from "./Favourite/Favourite"
// import User from "./User/User";
// import Plus from "./Plus/Plus";

const Navigation = () => {
    return (
        <div className={styles.nav_bar}>
          <div className={styles.nav_logo}>
             <i><h3><Link target="_blank" to={"https://www.linkedin.com/in/jossyhod/"}>...Let's Connect</Link></h3></i>
          </div>
          <ul className={styles.nav_ul}>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="#contact"smooth>Contact</Link></li>
            <li> <Link to={"/about"}>About</Link></li>
            <li> <Link to={"/signup"}>Work</Link></li>
            <li> <Link to={"/signup"}>Experience</Link></li>
            <li> <Link to={"/signup"}>Passion</Link></li>
          </ul>
             
          <div className={styles.menubar}><img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/menu_rljc50.png"/></div>
          

        </div>
      );
}

export default Navigation
