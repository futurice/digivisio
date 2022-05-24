import React, { useState } from 'react';

import { LearningMode } from '../../types/LearningMode';
import { getDescriptionForLearningMode, getDisplayValueForLearningMode } from '../../utils';
import styles from './LearningModeSelector.module.css';

export type LearningModeProps = {
  readonly learningMode: LearningMode | undefined;
  readonly setLearningMode: (learningMode: LearningMode) => void;
};

const LearningModeSelector = ({ learningMode, setLearningMode }: LearningModeProps) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  return (
    <div className={styles.modeWrapper}>
      <button
        type="button"
        aria-label="Oppimistyylin valitsin"
        className={styles.mode}
        onClick={() => setIsOptionsOpen(!isOptionsOpen)}
      >
        <div>
          <b>{learningMode ? getDisplayValueForLearningMode(learningMode) : 'Valitse oppimistyyli'}</b>
        </div>
      </button>
      {isOptionsOpen && (
        <div className={styles.modeList}>
          {Object.values(LearningMode).map((mode) => (
            <button
              type="button"
              key={mode}
              onClick={() => {
                setIsOptionsOpen(false);
                setLearningMode(mode as LearningMode);
              }}
            >
              <b>{getDisplayValueForLearningMode(mode)}</b>
              <p>{getDescriptionForLearningMode(mode)}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearningModeSelector;
