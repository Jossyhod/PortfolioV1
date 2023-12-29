import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { HiSelector } from "react-icons/hi";
import { LiaSignalSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";

const Navigation = () => {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.nav_logo}>
        <i>
          <h3>
            <Link target="_blank" to={"https://www.linkedin.com/in/jossyhod/"}>
              ...Let's Connect
            </Link>
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

      <div className={styles.menubar}>
        <img
          src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172729/menu_rljc50.png"
          alt=""
        />
      </div>

      <div className={styles.container}>
        <div id={styles.logo}>
          <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1692172726/2OC_logo-removebg-preview_q75nqy.png"  alt=""/>
        </div>
        <div id={styles.header}>
          <div className={styles.headertxt}>
            <h4>Devias</h4>
            <p>Production</p>
          </div>
          <div id={styles.selector}>
            <HiSelector />
          </div>
        </div>

        <ul>
          <Link to={"/"}>
            <li>
              <AiOutlineHome className={styles.icon} />
              <span>Home</span>
            </li>
          </Link>
          <Link to={"/dashboard/overview"}>
            <li>
              <LiaSignalSolid className={styles.icon} />
              <span>Overview</span>
            </li>
          </Link>
          <Link to={"/dashboard/customer"}>
            <li>
              <HiUsers className={styles.icon} />
              <span>Customers</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li>
              <LiaSignalSolid className={styles.icon} />
              <span>Companies</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li>
              <LiaSignalSolid className={styles.icon} />
              <span>Account</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li>
              <LiaSignalSolid className={styles.icon} />
              <span>Settings</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li>
              <LiaSignalSolid className={styles.icon} />
              <span>Login</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li>
              <LiaSignalSolid className={styles.icon} />
              <span>Register</span>
            </li>
          </Link>
          <Link to={"/"}>
            <li>
              <LiaSignalSolid className={styles.icon} />
              <span>Error</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
