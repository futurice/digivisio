import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import SearchResults from './components/SearchResults';
import { OpenAPI } from './utils/apiclient';

// eslint-disable-next-line functional/immutable-data
OpenAPI.BASE = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001'; // todo this should be picked from env probably...

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
