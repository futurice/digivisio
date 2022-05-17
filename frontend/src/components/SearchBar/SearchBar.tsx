import React, { useState } from 'react';

import apiClient from '../../utils/apiClient';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      apiClient.post('', {
        keywords: keyword,
      });
    }
  };

  return (
    <input
      className={styles.searchBar}
      aria-label="Hakukenttä"
      onChange={({ target }) => setKeyword(target.value)}
      onKeyDown={handleKeydown}
    />
  );
};

export default SearchBar;
