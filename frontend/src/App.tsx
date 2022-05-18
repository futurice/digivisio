import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import SearchResults from './components/SearchResults';
import { OpenAPI } from './utils/apiclient';

// eslint-disable-next-line functional/immutable-data
OpenAPI.BASE = ''; // in production this should be set to '', since nginx proxies /api/ routes to the backend container, override through env instead...
// OpenAPI.BASE = 'http://localhost:3001';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/result/:id" element={<SearchPage />} />
          <Route path="/results" element={<SearchResults />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
