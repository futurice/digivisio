import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Button from '../common/Button';
import styles from './SearchBar.module.css';

const SearchBar = ({ isSearchButtonHidden }: { readonly isSearchButtonHidden?: boolean }) => {
  const [params] = useSearchParams();
  const keywordParam = params.get('keywords') || '';
  const [keywords, setKeywords] = useState(keywordParam);
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
        aria-label="Hakukenttä koko aineistolle"
        onChange={({ target }) => setKeywords(target.value)}
        placeholder="Hae koko aineistosta"
        value={keywords}
      />
      <Button className={isSearchButtonHidden ? styles.hidden : undefined} isSubmit ariaLabel="Hae">
        <span>Hae</span>
      </Button>
    </form>
  );
};

export default SearchBar;
