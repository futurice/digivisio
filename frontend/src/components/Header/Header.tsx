import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SearchBar from '../SearchBar';
import styles from './Header.module.css';
import ProfileSelector, { ProfileProps } from './ProfileSelector/ProfileSelector';

const Header = ({ ...rest }: ProfileProps) => {
  const location = useLocation();
  const showSearchBar = location.pathname !== '/';
  return (
    <div className={styles.header}>
      <NavLink to="/">Digivisio</NavLink>
      {showSearchBar && <SearchBar isSearchButtonHidden />}
      <ProfileSelector {...rest} />
    </div>
  );
};

export default Header;
