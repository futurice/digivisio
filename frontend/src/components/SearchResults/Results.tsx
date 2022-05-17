/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

import { Description, MaterialName, SearchResult, SearchResultsResponse } from '../../types/SearchResult';
import styles from './Results.module.css';

type Props = {
  readonly searchResultResponse?: SearchResultsResponse;
};

const Results = ({ searchResultResponse }: Props) => {
  const getResultFields = (result: SearchResult, lang = 'fi') => ({
    id: result.id,
    materialName: result.materialName.find((entry) => entry.language === lang)?.materialname,
    description: result.description.find((entry) => entry.language === lang)?.description,
  });

  const allResults = searchResultResponse?.results.map((result) => getResultFields(result)) ?? [];

  return (
    <div>
      <div className={styles.resultHits}>
        <p>Tuloksia:</p>
        <p>{searchResultResponse?.hits}</p>
      </div>
      <div className={styles.results}>
        {allResults.map(({ id, materialName, description }) => (
          <div className={styles.material} key={`${materialName}-${description}`}>
            <Link to={`/${id}`}>{materialName}</Link>
            <p className={styles.description}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
