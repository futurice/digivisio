import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import styles from './App.module.css';
import SearchPage from './components/SearchPage';
import { OpenAPI } from './utils/apiclient';

// eslint-disable-next-line functional/immutable-data
OpenAPI.BASE = 'http://localhost:3001';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>Digivisio</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/:id" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
