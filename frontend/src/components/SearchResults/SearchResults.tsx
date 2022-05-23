import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchResponseModel } from '../../utils/apiclient/models/SearchResponseModel';
import { DefaultService } from '../../utils/apiclient/services/DefaultService';
import ResultCard from './ResultCard';
import styles from './SearchResults.module.css';

const Results = () => {
  const [searchResultResponse, setSearchResultResponse] = useState<SearchResponseModel>();
  const [params] = useSearchParams();
  const keywordParam = params.get('keywords') || '';

  useEffect(() => {
    const getResults = async () => {
      const results = await DefaultService.search({ keywords: keywordParam });
      setSearchResultResponse(results);
    };
    getResults();
  }, [keywordParam]);

  const allResults = searchResultResponse?.results ?? [];

  return (
    <div className={styles.resultsList}>
      <div className={styles.results}>
        {allResults.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Results;
