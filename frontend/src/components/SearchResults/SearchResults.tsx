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

const Results = ({ ...rest }: ResultProfileProps) => {
  const [searchResultResponse, setSearchResultResponse] = useState<SearchResponseModel>();
  const [params] = useSearchParams();
  const keywordParam = params.get('keywords') || '';

  useEffect(() => {
    const getResults = async () => {
      const results = await DefaultService.search({
        keywords: keywordParam,
        filters: {
          educationalLevels: [...rest.selectedProfile.educationalLevels.map((el) => el.key)],
          educationalRoles: [...rest.selectedProfile.educationalRoles.map((el) => el.key)],
        },
      });
      setSearchResultResponse(results);
    };
    getResults();
  }, [keywordParam, rest.selectedProfile]);

  const allResults = searchResultResponse?.results ?? [];

  return (
    <div className={styles.resultsList}>
      <div className={styles.searchFilter}>
        <p>Oppijaprofiiliisi perustuvat valinnat</p>
        <div className={styles.searchFilterCriteria}>
          {rest.selectedProfile.educationalLevels.concat(rest.selectedProfile.educationalRoles).map((el) => (
            <div>{el.value}</div>
          ))}
        </div>
      </div>
      <div className={styles.results}>
        {allResults.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};

export default Results;
