/* eslint-disable max-lines */
/* eslint complexity: ["error", 8] */

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Profile } from '../../types/Profile';
import { LearningMaterialsService } from '../../utils/apiclient';
import { LearningMaterialModel } from '../../utils/apiclient/models/LearningMaterialModel';
import dateConverter from '../../utils/dateConverter';
import DescribeText from '../common/DescribeText';
import DownloadButton from '../common/DownloadButton';
import LoadingSpinner from '../common/LoadingSpinner';
import TopicElements from '../common/TopicElements';
import getResultPageFields from './getResultPageFields';
import RelatedMaterial from './RelatedMaterial';
import RelatedPublications from './RelatedPublications/RelatedPublications';
import styles from './ResultPage.module.css';

const scrollToDiv = (ref: React.RefObject<HTMLDivElement>) => ref.current && ref.current.scrollIntoView();

export type ResultsProps = {
  readonly selectedProfile: Profile;
};

const ResultPage = ({ selectedProfile }: ResultsProps) => {
  const { id } = useParams();
  const [learningMaterial, setLearningMaterial] = useState<LearningMaterialModel>();
  const pageUrl = window.location.href;

  const contentRef = useRef<HTMLDivElement>(null);
  const recommendationsRef = useRef<HTMLDivElement>(null);
  const relatedPublicationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getResults = async () => {
      const result = await LearningMaterialsService.getLearningMaterialMetadata(id as string);
      setLearningMaterial(result);
    };
    getResults();
  }, [id, setLearningMaterial]);

  const result = learningMaterial && getResultPageFields(learningMaterial);
  const showMentoringBanner = selectedProfile.age <= 35 && selectedProfile.enrolledInUniOrGraduated;

  return result ? (
    <main className={styles.resultPage}>
      <div className={styles.sectionRow}>
        <button type="button" aria-label="vieritä sisältöön" onClick={() => scrollToDiv(contentRef)}>
          Sisältö
        </button>
        <button type="button" aria-label="vieritä suosituksiin" onClick={() => scrollToDiv(relatedPublicationsRef)}>
          Aiheeseen liittyvät julkaisut
        </button>
        <button type="button" aria-label="vieritä suosituksiin" onClick={() => scrollToDiv(recommendationsRef)}>
          Aiheeseen liittyvät muut suositukset
        </button>
      </div>
      <div className={styles.titleRow} ref={contentRef}>
        <h2>{result.name}</h2>
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
        scrolling="no"
      />
      <div className={styles.section}>
        <h3 className={styles.subtitle}>Lisenssi</h3>
        {result.license.value}
      </div>
      <div>
        <h3 className={styles.subtitle}>Linkki</h3>
        <div className={styles.linkContainer}>
          <input type="text" className={styles.linkInput} value={pageUrl} disabled aria-label="linkki aineistoon" />
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
        <TopicElements title="Avainsanat" topicStrings={result.keywords} />
      </div>
      <section className={styles.relatedMaterial} ref={relatedPublicationsRef}>
        <RelatedPublications relatedPublications={result.relatedPublications} />
      </section>
      <section className={styles.relatedMaterial} ref={recommendationsRef}>
        {((result.relatedCourses && result.relatedCourses.length > 0) || showMentoringBanner) && (
          <RelatedMaterial relatedCourses={result.relatedCourses} showMentoringBanner={showMentoringBanner} />
        )}
      </section>
    </main>
  ) : (
    <LoadingSpinner />
  );
};

export default ResultPage;
