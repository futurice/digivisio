import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DefaultService } from '../../utils/apiclient';
import { LearningMaterialModel } from '../../utils/apiclient/models/LearningMaterialModel';
import dateConverter from '../../utils/dateConverter';
import DescribeText from '../common/DescribeText';
import DownloadButton from '../common/DownloadButton';
import TopicElements from '../common/TopicElements';
import styles from './ResultPage.module.css';

const getResultFields = (result: LearningMaterialModel, lang = 'fi') => ({
  author: result.author.map(({ authorname, organization }) =>
    [authorname, organization].filter((element) => element.length > 0).join(', '),
  ),
  description: result.description.find((entry) => entry.language === lang)?.description,
  downloadCounter: result.downloadCounter,
  hasDownloadableFiles: result.hasDownloadableFiles,
  license: result.license,
  id: result.id,
  keywords: result.keywords.map(({ value }) => value),
  name: result.name.find((entry) => entry.language === lang)?.materialname,
  publishedAt: result.publishedAt,
  updatedAt: result.updatedAt,
  viewCounter: result.viewCounter,
});

const ResultPage = () => {
  const { id } = useParams();
  const [learningMaterial, setLearningMaterial] = useState<LearningMaterialModel>();
  const pageUrl = window.location.href;

  useEffect(() => {
    const getResults = async () => {
      const result = await DefaultService.getLearningMaterialMetadata(id as string);
      setLearningMaterial(result);
    };
    getResults();
  }, [id, setLearningMaterial]);

  const result = learningMaterial && getResultFields(learningMaterial);

  return result ? (
    <div key={`${result.name}-${Math.random()}`}>
      <div className={styles.titleRow}>
        <h1>{result.name}</h1>
        <DownloadButton isLarge id={result.id} />
      </div>
      <div className={styles.metadataRow}>
        <div className={styles.metadata}>
          <DescribeText>{`Julkaistu: ${dateConverter(result.publishedAt)}`}</DescribeText>
          <DescribeText>{`Muokattu ${dateConverter(result.publishedAt)}`}</DescribeText>
        </div>
        <div className={styles.metadata}>
          <DescribeText>{`${result.viewCounter} näyttökertaa`}</DescribeText>
          <DescribeText>{`${result.downloadCounter} latauskertaa`}</DescribeText>
        </div>
      </div>
      <div className={styles.authors}>
        {result.author.map((author) => (
          <span key={Math.random()}>{author}</span>
        ))}
      </div>
      <p>{result.description}</p>
      <iframe
        className={styles.iframe}
        title={`${result.name}`}
        src={`https://aoe.fi/#/embed/${result.id}/fi`}
        width="720"
        height="500"
      />
      <div>Lisenssi {result.license.value}</div>
      <TopicElements title="Avainsanat" topicStrings={result.keywords} />
      <div>
        Linkki
        <input type="text" className={styles.linkInput} value={pageUrl} disabled />
        <button
          type="button"
          className={styles.linkButton}
          onClick={() => {
            navigator.clipboard.writeText(pageUrl);
          }}
        >
          Kopioi linkki
        </button>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default ResultPage;
