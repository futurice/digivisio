import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../../assets/digivisio.png';
import { LearningMode } from '../../types/LearningMode';
import { Profile } from '../../types/Profile';
import LearningModeSelector from '../LearningModeSelector/LearningModeSelector';
import SearchBar from '../SearchBar';
import styles from './Header.module.css';
import ProfileSelector from './ProfileSelector/ProfileSelector';

export type HeaderProps = {
  readonly selectedProfile: Profile;
  readonly setSelectedProfile: (profile: Profile) => void;
  readonly learningMode: LearningMode | undefined;
  readonly setLearningMode: (learningMode: LearningMode) => void;
};

const Header = ({ ...rest }: HeaderProps) => {
  const location = useLocation();
  const showSearchBar = location.pathname !== '/';
  return (
    <div className={styles.header}>
      <NavLink to="/">
        <h1 className={styles.title}>Digivisio</h1>
        <img src={logo} alt="digivisio" />
      </NavLink>
      {showSearchBar && (
        <>
          <SearchBar />
          <LearningModeSelector {...rest} />
        </>
      )}
      <ProfileSelector {...rest} />
    </div>
  );
};

export default Header;
