import React from "react";
import SidebarMenu from "./sidebar_menu";
import styles from "./sidebar.module.css";

function Sidebar(props) {
  return (
    <ul className={styles.container}>
      {props.sidemenus.map((sidemenu) => {
        return (
          <SidebarMenu key={sidemenu.id} sidemenu={sidemenu}></SidebarMenu>
        );
      })}
    </ul>
  );
}

export default Sidebar;
