import React from 'react';

import TopicElement from '../TopicElement';
import styles from './TopicElements.module.css';

type Props = {
  readonly title: string;
  readonly topicStrings: ReadonlyArray<string>;
  readonly inline?: boolean;
};

const TopicElements = ({ title, topicStrings, inline }: Props) => (
  <div className={inline ? styles.flex : undefined}>
    <h3 className={styles.title}>
      {title}
      {inline && ': '}
    </h3>
    <div className={styles.flex}>
      {topicStrings.map((topic) => (
        <TopicElement key={Math.random()}>{topic}</TopicElement>
      ))}
    </div>
  </div>
);
export default TopicElements;
