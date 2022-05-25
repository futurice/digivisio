import React from 'react';

import thumbnailFallback from '../../../assets/suggestion_thumb_placeholder.png';
import { OpenUniversityCourseModel } from '../../../utils/apiclient';
import DescribeText from '../../common/DescribeText';
import styles from './RelatedMaterial.module.css';

type Props = {
  readonly relatedCourses: ReadonlyArray<OpenUniversityCourseModel> | undefined;
  readonly showMentoringBanner: boolean;
};

const RelatedMaterial = ({ relatedCourses, showMentoringBanner }: Props) => {
  return (
    <section>
      <h2>Aiheeseen liittyvät muut suositukset</h2>
      <div className={styles.coursesGrid}>
        {relatedCourses &&
          relatedCourses.map(({ description, name, url, universityNames }) => (
            <div key={url}>
              <img src={thumbnailFallback} alt="" />
              <a className={styles.externalLink} href={url} target="_blank" rel="noreferrer">
                <DescribeText>Kurssi</DescribeText>
                <h3>{name}</h3>
                <p className={styles.description}>{description}</p>
                <span>{universityNames.join(', ')}</span>
              </a>
            </div>
          ))}
        {showMentoringBanner ? (
          <div>
            <img src={thumbnailFallback} alt="Lisämateriaalin mentorointi thumbnail" />
            <a className={styles.externalLink} href="https://suomenmentorit.fi/" target="_blank" rel="noreferrer">
              <DescribeText>Mentorinti</DescribeText>
              <h3>Etsi mentori kehityksesi ja oppimisesi tueksi</h3>
              <p className={styles.description}>
                Suomen Mentoreiden seuraavat mentorointiohjelmat käynnistyvät syksyllä 2022.
              </p>
              <span>Suomen Mentorit</span>
            </a>
          </div>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
};

export default RelatedMaterial;
