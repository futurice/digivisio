import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { LearningMode } from '../../types/LearningMode';
import { Profile } from '../../types/Profile';
import { getFormatsForLearningMode } from '../../utils';
import { SearchResponseModel } from '../../utils/apiclient/models/SearchResponseModel';
import { SearchService } from '../../utils/apiclient/services/SearchService';
import LoadingSpinner from '../common/LoadingSpinner';
import ResultCard from './ResultCard';
import SearchPagination from './SearchPagination';
import styles from './SearchResults.module.css';

export type ResultProfileProps = {
  readonly selectedProfile: Profile;
  readonly selectedLearningMode: LearningMode | undefined;
};

const Results = ({ selectedProfile, selectedLearningMode }: ResultProfileProps) => {
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
    setSearchResultResponse(undefined);
    const getResults = async () => {
      const results = await SearchService.search({
        from: topParam < 0 ? 0 : topParam,
        size: pageSize,
        keywords: keywordParam,
        filters: {
          educationalLevels: [...selectedProfile.educationalLevels.map(({ key }) => key)],
          educationalRoles: [...selectedProfile.educationalRoles.map(({ key }) => key)],
          learningResourceTypes: [...(selectedLearningMode ? getFormatsForLearningMode(selectedLearningMode) : [])],
        },
      });
      setSearchResultResponse(results);
    };
    getResults();
  }, [keywordParam, selectedProfile, selectedLearningMode, topParam]);

  const allResults = searchResultResponse?.results ?? [];

  return searchResultResponse ? (
    <div>
      <div className={styles.searchFilter}>
        <p>Oppijaprofiiliisi perustuvat valinnat</p>
        <div className={styles.searchFilterCriteria}>
          {selectedProfile.educationalLevels.concat(selectedProfile.educationalRoles).map(({ value }) => (
            <div>{value}</div>
          ))}
        </div>
      </div>
      <div className={styles.results}>
        {allResults.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
      <SearchPagination currentPage={currentPage} lastPage={lastpage} onPageChange={handlePageChange} />
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default Results;
