import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Profile } from '../../types/Profile';
import { SearchResponseModel } from '../../utils/apiclient/models/SearchResponseModel';
import { SearchResult } from '../../utils/apiclient/models/SearchResult';
import { DefaultService } from '../../utils/apiclient/services/DefaultService';
import ResultCard from './ResultCard';
import styles from './Results.module.css';

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

  const getResultFields = (result: SearchResult, lang = 'fi') => ({
    id: result.id,
    materialName: result.materialName.find((entry) => entry.language === lang)?.materialname,
    description: result.description.find((entry) => entry.language === lang)?.description,
  });

  const allResults = searchResultResponse?.results.map((result) => getResultFields(result)) ?? [];

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
      <div className={styles.resultHits}>
        <p>Tuloksia:</p>
        <p>{searchResultResponse?.hits}</p>
      </div>
      <div className={styles.results}>
        {allResults.map(({ id, materialName, description }) => (
          <ResultCard key={id} id={id} materialName={materialName} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Results;
