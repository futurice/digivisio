/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import { SearchResultsResponse } from '../../types/SearchResult';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';

const SearchPage = () => {
  const [results, setResults] = useState<SearchResultsResponse>();
  return (
    <>
      <SearchBar setResults={setResults} />
      <SearchResults searchResultResponse={results} />
    </>
  );
};

export default SearchPage;
