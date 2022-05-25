import React, { useEffect, useState } from 'react';

import { LearningMode } from '../../types/LearningMode';
import { Profile } from '../../types/Profile';
import { getDescriptionForLearningMode, getDisplayValueForLearningMode } from '../../utils';
import { SearchResponseModel } from '../../utils/apiclient/models/SearchResponseModel';
import { SearchService } from '../../utils/apiclient/services/SearchService';
import Menu from '../common/Menu';
import SearchBar from '../SearchBar';
import RecommendationCard from './RecommendationCard';
import styles from './SearchPage.module.css';

export type SearchPageProps = {
  readonly selectedProfile: Profile;
  readonly learningMode: LearningMode | undefined;
  readonly setLearningMode: (learningMode: LearningMode) => void;
};

const SearchPage = ({ selectedProfile, learningMode, setLearningMode }: SearchPageProps) => {
  const [searchResultResponse, setSearchResultResponse] = useState<SearchResponseModel>();

  useEffect(() => {
    setSearchResultResponse(undefined);
    const getResults = async () => {
      const results = await SearchService.search({
        from: 0,
        size: 4,
        keywords: selectedProfile.interest,
        filters: {
          educationalLevels: [...selectedProfile.educationalLevels.map(({ key }) => key)],
          educationalRoles: [...selectedProfile.educationalRoles.map(({ key }) => key)],
        },
      });
      setSearchResultResponse(results);
    };
    getResults();
  }, [selectedProfile.interest, selectedProfile.educationalLevels, selectedProfile.educationalRoles]);

  const allResults = searchResultResponse?.results ?? [];

  return (
    <main>
      <h2 className={styles.title}>Mitä haluat oppia</h2>
      <div className={styles.modeSelector}>
        <Menu
          id="mode-selector"
          name="Oppimistyylin valitsin"
          description="Hae oppimateriaaleja oppimistyylisi sekä tilanteesi mukaisesti"
          values={Object.values(LearningMode)}
          placeholder="Valitse oppimistyyli"
          selectedValue={learningMode}
          setValue={(mode) => setLearningMode(mode)}
          getName={(mode) => getDisplayValueForLearningMode(mode)}
          getDescription={(mode) => getDescriptionForLearningMode(mode)}
        />
      </div>
      <SearchBar />
      <div className={styles.profileRecommendations}>
        <h2>Oppijaprofiiliisi liittyvät oppimateriaali suositukset</h2>
        <div>
          {allResults.map((result) => (
            <RecommendationCard key={result.id} result={result} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
