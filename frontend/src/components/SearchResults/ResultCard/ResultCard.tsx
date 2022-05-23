import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Download } from '../../../assets/icons/download.svg';
import thumbnailFallback from '../../../assets/thumbnail_placeholder.png';
import { SearchResult } from '../../../utils/apiclient';
import DescribeText from '../../common/DescribeText';
import styles from './ResultCard.module.css';

const getResultFields = (result: SearchResult, lang = 'fi') => ({
  materialName: result.materialName.find((entry) => entry.language === lang)?.materialname,
  description: result.description.find((entry) => entry.language === lang)?.description,
  authors: result.authors.map(({ authorname }) => authorname).join(', '),
  educationalLevels: result.educationalLevels.map(({ value }) => value),
  learningResourceTypes: result.learningResourceTypes.map(({ value }) => value),
});

const ResultCard = ({ result }: { readonly result: SearchResult }) => {
  const { materialName, authors, description, educationalLevels, learningResourceTypes } = getResultFields(result);

  const { id, thumbnail, publishedAt, license, hasDownloadableFiles } = result;

  const publishedDate = new Intl.DateTimeFormat('fi-FI', { year: 'numeric', month: 'numeric', day: 'numeric' }).format(
    new Date(publishedAt),
  );

  return (
    <div className={styles.resultCard} key={`${materialName}-${Math.random()}`}>
      <div className={styles.imageColumn}>
        <img src={thumbnail?.filepath ?? thumbnailFallback} alt="tuloksen thumbnail" aria-hidden />
        <DescribeText>Sisällön tyyppi</DescribeText>
        {learningResourceTypes.map((learningResourceType) => (
          <p>{learningResourceType}</p>
        ))}
      </div>
      <div>
        <div className={styles.titleRow}>
          <Link className={styles.link} to={`/result/${id}`}>
            {materialName}
          </Link>
          {hasDownloadableFiles && (
            <a className={styles.downloadLink} href={`https://aoe.fi/api/material/file/${id}`}>
              <Download className={styles.downloadIcon} />
              <span>Lataa</span>
            </a>
          )}
        </div>
        <p>{authors} </p>
        <p className={styles.description}>{description}</p>
        <div className={styles.educationalLevels}>
          <p>Koulutusaste: </p>
          {educationalLevels.map((educationalLevel) => (
            <div className={styles.educationalLevel}>{educationalLevel}</div>
          ))}
        </div>
        <div className={styles.resultFooter}>
          <DescribeText>{license.value}</DescribeText>
          <DescribeText>{publishedDate}</DescribeText>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
