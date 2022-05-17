import React, { useState } from 'react';

import { DefaultService, OpenAPI } from '../../utils/apiclient';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  // eslint-disable-next-line functional/immutable-data
  OpenAPI.BASE = 'http://localhost:3001';

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      console.log(keyword);
      DefaultService.random();
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
