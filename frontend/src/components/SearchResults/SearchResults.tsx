import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Profile } from '../../types/Profile';
import { SearchResponseModel } from '../../utils/apiclient/models/SearchResponseModel';
import { DefaultService } from '../../utils/apiclient/services/DefaultService';
import ResultCard from './ResultCard';
import styles from './SearchResults.module.css';

export type ResultProfileProps = {
  readonly selectedProfile: Profile;
};

const Results = ({ selectedProfile }: ResultProfileProps) => {
  const [searchResultResponse, setSearchResultResponse] = useState<SearchResponseModel>();
  const [params] = useSearchParams();
  const keywordParam = params.get('keywords') || '';

  useEffect(() => {
    const getResults = async () => {
      const results = await DefaultService.search({
        keywords: keywordParam,
        filters: {
          educationalLevels: [...selectedProfile.educationalLevels.map(({ key }) => key)],
          educationalRoles: [...selectedProfile.educationalRoles.map(({ key }) => key)],
        },
      });
      setSearchResultResponse(results);
    };
    getResults();
  }, [keywordParam, selectedProfile]);

  const allResults = searchResultResponse?.results ?? [];

  return (
    <div>
      <div className={styles.searchFilter}>
        <p>Oppijaprofiiliisi perustuvat valinnat</p>
        <div className={styles.searchFilterCriteria}>
          {selectedProfile.educationalLevels.concat(selectedProfile.educationalRoles).map(({ value }) => (
            <div>{value}</div>
          ))}
        </div>
      </div>
      <div className={styles.resultsList}>
        <div className={styles.results}>
          {allResults.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
