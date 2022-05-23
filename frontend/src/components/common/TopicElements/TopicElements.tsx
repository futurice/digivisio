import React from 'react';

import TopicElement from '../TopicElement';
import styles from './TopicElements.module.css';

type Props = {
  readonly title: string;
  readonly topicStrings: ReadonlyArray<string>;
};

const TopicElements = ({ title, topicStrings }: Props) => (
  <div className={styles.topicElements}>
    <p>{title}: </p>
    {topicStrings.map((topic) => (
      <TopicElement key={Math.random()}>{topic}</TopicElement>
    ))}
  </div>
);
export default TopicElements;
