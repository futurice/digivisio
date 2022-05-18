import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [keywords, setKeywords] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/results?keywords=${keywords}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        id="search-bar"
        className={styles.searchBar}
        aria-label="Hakukenttä - hae koko aineistosta"
        onChange={({ target }) => setKeywords(target.value)}
        placeholder="Hae koko aineistosta"
      />
      <button className={styles.hidden} type="submit" aria-label="Hae">
        <span>Hae</span>
      </button>
    </form>
  );
};

export default SearchBar;
