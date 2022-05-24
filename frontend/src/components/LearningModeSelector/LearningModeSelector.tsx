import React, { useState } from 'react';

import thumbnailFallback from '../../assets/icons/keyboard_arrow_down.svg';
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
        <div className={styles.selectedModeWrapper}>
          <b>{learningMode ? getDisplayValueForLearningMode(learningMode) : 'Valitse oppimistyyli'}</b>
          <img src={thumbnailFallback} alt="oppimistyyli avausnuoli" aria-hidden />
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
