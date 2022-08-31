import React from "react";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <FontAwesomeIcon className={styles.logo__icon} icon={faYoutube} />{" "}
        <span className={styles.logo__title}>HoTube</span>
      </div>
      <form className={styles.search} action="">
        <input className={styles.input} type="text" placeholder="Search" />
        <button className={styles.button}>
          <FontAwesomeIcon
            className={styles.button__icon}
            icon={faMagnifyingGlass}
          />
        </button>
      </form>
      <div className={styles.info}>
        <div className={styles.bell}>
          <FontAwesomeIcon className={styles.bell__icon} icon={faBell} />
          <div className={styles.count}>1</div>
        </div>
        <span className={styles.user}>Ho</span>
      </div>
    </div>
  );
}

export default Navbar;
