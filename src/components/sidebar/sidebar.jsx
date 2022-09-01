import React from 'react';
import SidebarMenu from '../sidebar_menu/sidebar_menu';
import styles from './sidebar.module.css';
import { sidemenus } from '../../data/sidemeuns';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar(props) {
  return (
    <ul className={styles.container}>
      <li className={styles.menubar}>
        <div className={styles.box}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faBars}
          ></FontAwesomeIcon>
        </div>
      </li>
      {sidemenus.map((sidemenu) => {
        return (
          <SidebarMenu key={sidemenu.id} sidemenu={sidemenu}></SidebarMenu>
        );
      })}
    </ul>
  );
}

export default Sidebar;
