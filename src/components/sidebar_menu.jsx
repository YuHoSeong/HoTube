import React from "react";
import styles from "./sidebar_menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";

function SidebarMenu(props) {
  console.log(props.sidemenu.icon);
  const test = props.sidemenu.icon;
  return (
    <li className={styles.item}>
      <FontAwesomeIcon icon={["fab", "apple"]} />
      <span>{props.sidemenu.title}</span>
    </li>
  );
}

export default SidebarMenu;
