import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../../assets/digivisio.png';
import profiles from '../../data/profiles';
import { LearningMode } from '../../types/LearningMode';
import { Profile } from '../../types/Profile';
import { getDescriptionForLearningMode, getDisplayValueForLearningMode } from '../../utils';
import Menu from '../common/Menu';
import SearchBar from '../SearchBar';
import styles from './Header.module.css';

export type HeaderProps = {
  readonly selectedProfile: Profile;
  readonly setSelectedProfile: (profile: Profile) => void;
  readonly learningMode: LearningMode | undefined;
  readonly setLearningMode: (learningMode: LearningMode) => void;
  readonly scrolled: boolean;
};

const Header = ({ learningMode, setLearningMode, selectedProfile, setSelectedProfile, scrolled }: HeaderProps) => {
  const location = useLocation();
  const showSearchBar = location.pathname !== '/';

  return (
=======
    <div className={`${styles.headerWrapper} ${scrolled && styles.shadow}`}>
    <header className={styles.header}>
      <NavLink to="/">
        <h1 className={styles.title}>Digivisio</h1>
        <img src={logo} alt="digivisio" />
      </NavLink>
      {showSearchBar && (
        <>
          <SearchBar />
          <Menu
            id="header-mode-selector"
            name="Oppimistyylin valitsin"
            description="Hae oppimateriaaleja oppimistyylisi sekä tilanteesi mukaisesti"
            values={Object.values(LearningMode)}
            placeholder="Oppimistyyli"
            selectedValue={learningMode}
            setValue={(mode) => setLearningMode(mode)}
            getName={(mode) => getDisplayValueForLearningMode(mode)}
            getDescription={(mode) => getDescriptionForLearningMode(mode)}
          />
        </>
      )}
      <Menu
        id="header-profile-selector"
        name="Profiilin valitsin"
        description="Valittu profiili"
        values={profiles}
        placeholder="Profiili"
        selectedValue={selectedProfile}
        setValue={(profile) => setSelectedProfile(profile)}
        getName={(profile) => profile.name}
        getDescription={(profile) => profile.interest}
        getPicture={(profile) => profile.thumbnail}
        left
      />
    </header>
    </div>
  );
};

export default Header;
