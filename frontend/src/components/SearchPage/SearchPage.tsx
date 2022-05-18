import React from 'react';

import SearchBar from '../SearchBar';
import styles from './SearchPage.module.css';

const SearchPage = () => {
  return (
    <>
      <h1 className={styles.title}>Mitä haluat oppia</h1>
      <SearchBar />
    </>
  );
};

export default SearchPage;
