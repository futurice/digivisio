import React, { ReactNode } from 'react';

import styles from './DescribeText.module.css';

type Props = {
  readonly children: ReactNode;
};

const DescribeText = ({ children }: Props) => <span className={styles.describeText}>{children}</span>;

export default DescribeText;
