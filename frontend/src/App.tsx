import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';
import Header from './components/Header';
import ResultPage from './components/ResultPage';
import SearchPage from './components/SearchPage';
import SearchResults from './components/SearchResults';
import profiles from './data/profiles';
import { Profile } from './types/Profile';
import { OpenAPI } from './utils/apiclient';

// eslint-disable-next-line functional/immutable-data
OpenAPI.BASE = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001'; // todo this should be picked from env probably...

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState<Profile>(profiles[0]);
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile} />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/result/:id" element={<ResultPage />} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
