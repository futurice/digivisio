import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ResultCard.module.css';

const ResultCard = ({
  id,
  materialName,
  description,
}: {
  readonly id: string;
  readonly materialName?: string;
  readonly description?: string;
}) => (
  <div className={styles.material} key={`${materialName}-${Math.random()}`}>
    <Link to={`/result/${id}`}>{materialName}</Link>
    <p className={styles.description}>{description}</p>
  </div>
);

export default ResultCard;
