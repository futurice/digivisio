import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';
import Header from './components/Header';
import ResultPage from './components/ResultPage';
import SearchPage from './components/SearchPage';
import SearchResults from './components/SearchResults';
import profiles from './data/profiles';
import { LearningMode } from './types/LearningMode';
import { Profile } from './types/Profile';
import { OpenAPI } from './utils/apiclient';

// eslint-disable-next-line functional/immutable-data
OpenAPI.BASE = process.env.REACT_APP_BACKEND_URL ?? ''; // Defaults to an empty string, which is tne normal mode in production with nginx proxying requests from frontend to backend on the same domain

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile>(profiles[0]);
  const [learningMode, setLearningMode] = useState<LearningMode | undefined>(undefined);

  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    OpenAPI.HEADERS = { authorization: `Bearer ${selectedProfile.fakejwt}` };
  }, [selectedProfile]);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header
          selectedProfile={selectedProfile}
          setSelectedProfile={setSelectedProfile}
          learningMode={learningMode}
          setLearningMode={setLearningMode}
        />
        <Routes>
          <Route path="/" element={<SearchPage learningMode={learningMode} setLearningMode={setLearningMode} />} />
          <Route path="/result/:id" element={<ResultPage selectedProfile={selectedProfile} />} />
          <Route
            path="/results"
            element={<SearchResults selectedProfile={selectedProfile} selectedLearningMode={learningMode} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
