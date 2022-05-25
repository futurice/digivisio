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

  const [scrolledToTop, setScrolledToTop] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolledToTop(window.scrollY > 0);
    });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line functional/immutable-data
    OpenAPI.HEADERS = { authorization: `Bearer ${selectedProfile.fakejwt}` };
  }, [selectedProfile]);

  return (
    <BrowserRouter>
      <Header
        scrolledToTop={scrolledToTop}
        selectedProfile={selectedProfile}
        setSelectedProfile={setSelectedProfile}
        learningMode={learningMode}
        setLearningMode={setLearningMode}
      />
      <div className={styles.app}>
        <Routes>
          <Route
            path="/"
            element={
              <SearchPage
                selectedProfile={selectedProfile}
                learningMode={learningMode}
                setLearningMode={setLearningMode}
              />
            }
          />
          <Route path="/result/:id" element={<ResultPage selectedProfile={selectedProfile} />} />
          <Route
            path="/results"
            element={<SearchResults selectedProfile={selectedProfile} selectedLearningMode={learningMode} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
