import React from 'react';

import { ReactComponent as Download } from '../../../assets/icons/download.svg';
import styles from './DownloadButton.module.css';

type Props = {
  readonly id: string;
  readonly isLarge?: boolean;
};

const DownloadButton = ({ id, isLarge }: Props) => {
  return (
    <a
      className={styles.downloadLink}
      href={`https://aoe.fi/api/material/file/${id}`}
      aria-label="Lataa materiaalit tiedostona"
    >
      <Download className={styles.downloadIcon} aria-hidden />
      <span className={isLarge ? styles.largeFont : styles.semiboldFont}>Lataa</span>
    </a>
  );
};

export default DownloadButton;
