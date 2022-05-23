import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Profile } from '../../types/Profile';
import { SearchResponseModel } from '../../utils/apiclient/models/SearchResponseModel';
import { DefaultService } from '../../utils/apiclient/services/DefaultService';
import ResultCard from './ResultCard';
import SearchPagination from './SearchPagination';
import styles from './SearchResults.module.css';

export type ResultProfileProps = {
  readonly selectedProfile: Profile;
};

const Results = ({ selectedProfile }: ResultProfileProps) => {
  const [searchResultResponse, setSearchResultResponse] = useState<SearchResponseModel>();
  const [params, setParams] = useSearchParams();
  const keywordParam = params.get('keywords') || '';
  const currentPage = Number.parseInt(params.get('page') ?? '1', 10);

  const handlePageChange = (page: number) => {
    params.set('page', page.toString());
    setParams(params);
  };

  const pageSize = 10;
  const topParam = currentPage * pageSize - pageSize;
  const lastpage = Math.ceil((searchResultResponse?.hits ?? 0) / pageSize);

  useEffect(() => {
    const getResults = async () => {
      const results = await DefaultService.search({
        from: topParam < 0 ? 0 : topParam,
        size: pageSize,
        keywords: keywordParam,
        filters: {
          educationalLevels: [...selectedProfile.educationalLevels.map(({ key }) => key)],
          educationalRoles: [...selectedProfile.educationalRoles.map(({ key }) => key)],
        },
      });
      setSearchResultResponse(results);
    };
    getResults();
  }, [keywordParam, selectedProfile, topParam]);

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
        {SearchPagination(currentPage, lastpage, handlePageChange)}
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
