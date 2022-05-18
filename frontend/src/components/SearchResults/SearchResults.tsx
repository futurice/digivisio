import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SearchResult, SearchResultsResponse } from '../../types/SearchResult';
import { DefaultService } from '../../utils/apiclient/services/DefaultService';
import ResultCard from './ResultCard';
import styles from './Results.module.css';

const Results = () => {
  const [searchResultResponse, setSearchResultResponse] = useState<SearchResultsResponse>();
  const [params] = useSearchParams();
  const keywordParam = params.get('keywords') || '';

  useEffect(() => {
    const getResults = async () => {
      const results = await DefaultService.search({ keywords: keywordParam });
      setSearchResultResponse(results);
    };
    getResults();
  }, [keywordParam]);

  const getResultFields = (result: SearchResult, lang = 'fi') => ({
    id: result.id,
    materialName: result.materialName.find((entry) => entry.language === lang)?.materialname,
    description: result.description.find((entry) => entry.language === lang)?.description,
  });

  const allResults = searchResultResponse?.results.map((result) => getResultFields(result)) ?? [];

  return (
    <div className={styles.resultsList}>
      <div className={styles.resultHits}>
        <p>Tuloksia:</p>
        <p>{searchResultResponse?.hits}</p>
      </div>
      <div className={styles.results}>
        {allResults.map(({ id, materialName, description }) => (
          <ResultCard id={id} materialName={materialName} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Results;
