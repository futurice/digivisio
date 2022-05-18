import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SearchBar from '../SearchBar';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const showSearchBar = location.pathname !== '/';
  return (
    <div className={styles.header}>
      <NavLink to="/">Digivisio</NavLink>
      {showSearchBar && <SearchBar />}
      <div>profile</div>
    </div>
  );
};

export default Header;
