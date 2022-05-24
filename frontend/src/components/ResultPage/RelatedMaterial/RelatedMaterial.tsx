import React from 'react';

import { OpenUniversityCourseModel } from '../../../utils/apiclient';
import DescribeText from '../../common/DescribeText';
import styles from './RelatedMaterial.module.css';

type Props = {
  readonly relatedCourses: ReadonlyArray<OpenUniversityCourseModel>;
};

const RelatedMaterial = ({ relatedCourses }: Props) => {
  return (
    <section>
      <h2>Aiheeseen liittyvät muut suositukset</h2>
      <div className={styles.coursesGrid}>
        {relatedCourses.map(({ description, name, url, universityNames }) => (
          <div>
            <a className={styles.externalLink} href={url} target="_blank" rel="noreferrer">
              <DescribeText>Kurssi</DescribeText>
              <h3>{name}</h3>
              <p className={styles.description}>{description}</p>
              <span>{universityNames.join(', ')}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedMaterial;
