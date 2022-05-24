import React, { ReactNode } from 'react';

import styles from './TopicElement.module.css';

type Props = {
  readonly children: ReactNode;
};

const TopicElement = ({ children }: Props) => <div className={styles.topicElement}>{children}</div>;

export default TopicElement;
