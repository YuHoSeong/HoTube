import React from 'react';
import styles from './sidebar_menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SidebarMenu(props) {
  return (
    <li className={styles.item}>
      <FontAwesomeIcon className={styles.icon} icon={props.sidemenu.icon} />
      <span className={styles.title}>{props.sidemenu.title}</span>
    </li>
  );
}

export default SidebarMenu;
