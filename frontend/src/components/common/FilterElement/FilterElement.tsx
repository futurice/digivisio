import React, { ReactNode } from 'react';

import close from '../../../assets/icons/close.svg';
import styles from './FilterElement.module.css';

type Props = {
  readonly children: ReactNode;
  readonly onClick: () => void;
};

const FilterElement = ({ children, onClick }: Props) => (
  <div className={styles.filterElement}>
    {children}
    <button className={styles.deselectButton} type="button" onClick={onClick} aria-label="Poista valinta">
      <img src={close} alt="Poista valinta" aria-hidden />
    </button>
  </div>
);

export default FilterElement;
