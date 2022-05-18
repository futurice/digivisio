import React, { useState } from 'react';

import { SearchResultsResponse } from '../../types/SearchResult';
import { DefaultService } from '../../utils/apiclient';
import styles from './SearchBar.module.css';

type Props = {
  readonly setResults: (results: SearchResultsResponse) => void;
};

const SearchBar = ({ setResults }: Props) => {
  const [keyword, setKeyword] = useState('');

  const handleKeydown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const result = await DefaultService.search({ keywords: keyword });
      setResults(result);
    }
  };

  return (
    <>
      <h2>Hae hakusanalla</h2>
      <input
        className={styles.searchBar}
        aria-label="Hakukenttä"
        onChange={({ target }) => setKeyword(target.value)}
        onKeyDown={handleKeydown}
      />
    </>
  );
};

export default SearchBar;
