import React from 'react';

import LearningMode, { LearningModeProps } from '../LearningModeSelector/LearningModeSelector';
import SearchBar from '../SearchBar';
import styles from './SearchPage.module.css';

const SearchPage = ({ ...rest }: LearningModeProps) => {
  return (
    <>
      <h2 className={styles.title}>Mitä haluat oppia</h2>
      <LearningMode {...rest} />
      <SearchBar />
    </>
  );
};

export default SearchPage;
