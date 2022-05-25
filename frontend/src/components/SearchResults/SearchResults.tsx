import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { LearningMode } from '../../types/LearningMode';
import { Profile, SearchFilter } from '../../types/Profile';
import { getFormatsForLearningMode } from '../../utils';
import { SearchResponseModel } from '../../utils/apiclient/models/SearchResponseModel';
import { SearchService } from '../../utils/apiclient/services/SearchService';
import LoadingSpinner from '../common/LoadingSpinner';
import FilterElements from './FilterElements';
import ResultCard from './ResultCard';
import SearchPagination from './SearchPagination';
import styles from './SearchResults.module.css';

export type ResultProfileProps = {
  readonly selectedProfile: Profile;
  readonly selectedLearningMode: LearningMode | undefined;
};

const Results = ({ selectedProfile, selectedLearningMode }: ResultProfileProps) => {
  const [searchResultResponse, setSearchResultResponse] = useState<SearchResponseModel>();
  const [selectedEducationalLevels, setSelectedEducationalLevels] = useState<ReadonlyArray<SearchFilter>>(
    selectedProfile.educationalLevels,
  );
  const [selectedEducationalRoles, setSelectedEducationalRoles] = useState<ReadonlyArray<SearchFilter>>(
    selectedProfile.educationalRoles,
  );

  useEffect(() => {
    setSelectedEducationalLevels(selectedProfile.educationalLevels);
    setSelectedEducationalRoles(selectedProfile.educationalRoles);
  }, [selectedProfile]);

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
          educationalLevels: [...selectedEducationalLevels.map(({ key }) => key)],
          educationalRoles: [...selectedEducationalRoles.map(({ key }) => key)],
          learningResourceTypes: [...(selectedLearningMode ? getFormatsForLearningMode(selectedLearningMode) : [])],
        },
      });
      setSearchResultResponse(results);
    };
    getResults();
  }, [keywordParam, selectedLearningMode, topParam, selectedEducationalLevels, selectedEducationalRoles]);

  const allResults = searchResultResponse?.results ?? [];

  return searchResultResponse ? (
    <main>
      <div className={styles.searchFilter}>
        <p>Oppijaprofiiliisi perustuvat valinnat</p>
        <div className={styles.searchFilterCriteria}>
          <FilterElements filterList={selectedEducationalLevels} setSearchFilterList={setSelectedEducationalLevels} />
          <FilterElements filterList={selectedEducationalRoles} setSearchFilterList={setSelectedEducationalRoles} />
        </div>
      </div>
      <div className={styles.results}>
        {allResults.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
      <SearchPagination currentPage={currentPage} lastPage={lastpage} onPageChange={handlePageChange} />
    </main>
  ) : (
    <LoadingSpinner />
  );
};

export default Results;
