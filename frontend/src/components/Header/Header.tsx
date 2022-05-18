import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/">Digivisio</NavLink>
      <div>profile</div>
    </div>
  );
};

export default Header;
