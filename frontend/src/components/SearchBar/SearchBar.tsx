import React, { useState } from 'react';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      console.log(keyword);
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
