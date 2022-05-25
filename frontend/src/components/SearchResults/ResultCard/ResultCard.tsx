import React from 'react';
import { Link } from 'react-router-dom';

import thumbnailFallback from '../../../assets/thumbnail_placeholder.png';
import { SearchResult } from '../../../utils/apiclient';
import dateConverter from '../../../utils/dateConverter';
import DescribeText from '../../common/DescribeText';
import DownloadButton from '../../common/DownloadButton';
import TopicElements from '../../common/TopicElements';
import styles from './ResultCard.module.css';

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

const ResultCard = ({ result }: { readonly result: SearchResult }) => {
  const { materialName, authors, description, educationalLevels, learningResourceTypes } = getResultFields(result);

  const { id, thumbnail, publishedAt, license, hasDownloadableFiles } = result;

  const publishedDate = dateConverter(publishedAt);

  return (
    <div className={styles.resultCard} key={`${materialName}-${Math.random()}`}>
      <div className={styles.imageColumn}>
        <img src={thumbnail?.filepath ?? thumbnailFallback} alt="" />
        <DescribeText>Sisällön tyyppi</DescribeText>
        {learningResourceTypes.map((learningResourceType) => (
          <p key={learningResourceType}>{learningResourceType}</p>
        ))}
      </div>
      <div>
        <div className={styles.titleRow}>
          <Link className={styles.link} to={`/result/${id}`}>
            <h2 className={styles.title}>{materialName}</h2>
          </Link>
          {hasDownloadableFiles && <DownloadButton id={id} />}
        </div>
        <p>{authors} </p>
        <p className={styles.description}>{description}</p>
        <TopicElements title="Koulutusaste" topicStrings={educationalLevels} inline />
        <div className={styles.resultFooter}>
          <DescribeText>{license.value}</DescribeText>
          <DescribeText>{publishedDate}</DescribeText>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
