import React from 'react';
import { Link } from 'react-router-dom';

import thumbnailFallback from '../../../assets/thumbnail_placeholder.png';
import { SearchResult } from '../../../utils/apiclient';
import styles from '../../SearchResults/ResultCard/ResultCard.module.css';

const getResultFields = (result: SearchResult, lang = 'fi') => ({
  materialName: result.materialName.find((entry) => entry.language === lang)?.materialname,
  description: result.description.find((entry) => entry.language === lang)?.description,
  authors: result.authors
    .map(({ authorname }) => authorname)
    .filter((authorname) => authorname.length > 0)
    .join(', '),
  educationalLevels: result.educationalLevels.map(({ value }) => value),
  learningResourceTypes: result.learningResourceTypes.map(({ value }) => value),
});

const RecommendationCard = ({ result }: { readonly result: SearchResult }) => {
  const { materialName, authors, description, learningResourceTypes } = getResultFields(result);
  const { id, thumbnail } = result;

  return (
    <div className={styles.resultCard} key={`${materialName}-${Math.random()}`}>
      <div className={styles.imageColumn}>
        <img src={thumbnail?.filepath ?? thumbnailFallback} alt="tuloksen thumbnail" aria-hidden />
      </div>
      <div>
        <div className={styles.titleRow}>
          <Link className={styles.link} to={`/result/${id}`}>
            <h2 className={styles.title}>{materialName}</h2>
          </Link>
        </div>
        <p>{authors} </p>
        <p className={styles.description}>{description}</p>
        <p>Sisällön tyyppi: {learningResourceTypes.join(', ')}</p>
      </div>
    </div>
  );
};

export default RecommendationCard;
