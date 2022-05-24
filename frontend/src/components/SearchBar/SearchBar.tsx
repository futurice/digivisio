import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [params] = useSearchParams();
  const keywordParam = params.get('keywords') || '';
  const [keywords, setKeywords] = useState(keywordParam);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/results?keywords=${keywords}&page=1`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        id="search-bar"
        className={styles.searchBar}
        aria-label="Hakukenttä koko aineistolle"
        onChange={({ target }) => setKeywords(target.value)}
        placeholder="Hae koko aineistosta"
        value={keywords}
      />
      <button className={styles.hidden} type="submit" aria-label="Hae" id="search-submit">
        <span>Hae</span>
      </button>
    </form>
  );
};

export default SearchBar;
