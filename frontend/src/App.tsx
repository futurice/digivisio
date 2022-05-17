import React from 'react';

import styles from './App.module.css';
import SearchPage from './components/SearchPage';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>Digivisio</h1>
        <SearchPage />
      </header>
    </div>
  );
};

export default App;
