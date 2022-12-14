import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';

function Header({ onSearch, searchRef }) {
  function handleKeyUp(e) {
    if (e.key === 'Enter') {
      onSearch();
    }
  }

  function handleClick() {
    onSearch();
  }
  return (
    <>
      <div className={styles.logo}>
        <FontAwesomeIcon className={styles.logo__icon} icon={faYoutube} />{' '}
        <span className={styles.logo__title}>HoTube</span>
      </div>
      <div className={styles.search}>
        <input
          ref={searchRef}
          className={styles.input}
          onKeyUp={handleKeyUp}
          type="text"
          placeholder="Search"
        />
        <button onClick={handleClick} className={styles.button}>
          <FontAwesomeIcon
            className={styles.button__icon}
            icon={faMagnifyingGlass}
          />
        </button>
      </div>
      <div className={styles.info}>
        <div className={styles.bell}>
          <FontAwesomeIcon className={styles.bell__icon} icon={faBell} />
          <div className={styles.count}>1</div>
        </div>
        <span className={styles.user}>Ho</span>
      </div>
    </>
  );
}

export default Header;
