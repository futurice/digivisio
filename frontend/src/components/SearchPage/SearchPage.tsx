import React, { useEffect, useState } from 'react';

import { LearningMode } from '../../types/LearningMode';
import { Profile } from '../../types/Profile';
import { SearchResponseModel } from '../../utils/apiclient/models/SearchResponseModel';
import { SearchService } from '../../utils/apiclient/services/SearchService';
import LearningModeSelector from '../LearningModeSelector/LearningModeSelector';
import SearchBar from '../SearchBar';
import RecommendationCard from './RecommendationCard';
import styles from './SearchPage.module.css';

export type SearchPageProps = {
  readonly selectedProfile: Profile;
  readonly learningMode: LearningMode | undefined;
  readonly setLearningMode: (learningMode: LearningMode) => void;
};

const SearchPage = ({ ...rest }: SearchPageProps) => {
  const [searchResultResponse, setSearchResultResponse] = useState<SearchResponseModel>();

  useEffect(() => {
    setSearchResultResponse(undefined);
    const getResults = async () => {
      const results = await SearchService.search({
        from: 0,
        size: 4,
        keywords: rest.selectedProfile.interest,
        filters: {
          educationalLevels: [...rest.selectedProfile.educationalLevels.map(({ key }) => key)],
          educationalRoles: [...rest.selectedProfile.educationalRoles.map(({ key }) => key)],
        },
      });
      setSearchResultResponse(results);
    };
    getResults();
  }, [rest.selectedProfile.interest, rest.selectedProfile.educationalLevels, rest.selectedProfile.educationalRoles]);

  const allResults = searchResultResponse?.results ?? [];

  return (
    <>
      <h2 className={styles.title}>Mitä haluat oppia</h2>
      <LearningModeSelector {...rest} />
      <SearchBar />
      <div className={styles.profileRecommendations}>
        <h2>Oppijaprofiiliisi liittyvät oppimateriaali suositukset</h2>
        <div>
          {allResults.map((result) => (
            <RecommendationCard key={result.id} result={result} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
