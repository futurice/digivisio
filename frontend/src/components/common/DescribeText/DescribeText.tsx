import React, { ReactNode } from 'react';

import styles from './DescribeText.module.css';

type Props = {
  readonly children: ReactNode;
};

const DescribeText = ({ children }: Props) => <p className={styles.describeText}>{children}</p>;

export default DescribeText;
