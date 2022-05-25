/* eslint-disable prettier/prettier */
import React from 'react';

import { RelatedPublicationsModel } from '../../../utils/apiclient/models/RelatedPublicationsModel';
import styles from './RelatedPublications.module.css';

type Props = {
  readonly relatedPublications: readonly RelatedPublicationsModel[] | undefined;
};

const renderPublicationRow = (publication: RelatedPublicationsModel) => {
  return (
    <div key={publication.id} className={styles.publicationRow}>
      <a className={styles.externalLink} href={publication.url} target="_blank" rel="noreferrer">
        <strong>{publication.title}</strong> - <small>{publication.authors}</small>
      </a>
    </div>
  );
};

const RelatedPublications = ({ relatedPublications }: Props) => {
  return (
    <section>
      <h2>Aiheeseen liittyviä julkaisuja</h2>
      {relatedPublications?.map((o) => renderPublicationRow(o))}
    </section>
  );
};

export default RelatedPublications;
