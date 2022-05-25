/* eslint-disable complexity */
import React, { useState } from 'react';

import arrowDown from '../../../assets/icons/keyboard_arrow_down.svg';
import styles from './Menu.module.css';

type MenuProps<T> = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly values: readonly T[];
  readonly setValue: (value: T) => void;
  readonly getName: (value: T) => string;
  readonly getDescription?: (value: T) => string;
  readonly getPicture?: (value: T) => string;
  readonly selectedValue?: T;
  readonly placeholder?: string;
  readonly left?: boolean;
};

const Menu = <T,>({
  id,
  name,
  description,
  values,
  selectedValue,
  placeholder,
  setValue,
  getName,
  getPicture,
  getDescription,
  left,
}: MenuProps<T>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.menuContainer}>
      <button
        id={id}
        type="button"
        aria-label={name}
        aria-haspopup
        aria-expanded={isMenuOpen}
        className={isMenuOpen ? styles.menuButtonActive : styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {selectedValue && getPicture && (
          <img className={styles.menuItemPicture} src={getPicture(selectedValue)} alt="" />
        )}
        {selectedValue ? getName(selectedValue) : placeholder}
        <img src={arrowDown} alt="" />
      </button>
      {isMenuOpen && (
        <div className={left ? styles.menuLeft : styles.menu} role="menu" aria-labelledby={id}>
          {description && <p className={styles.menuDescription}>{description}</p>}
          <ul className={styles.menuItems}>
            {values.map((value) => (
              <li key={`${id}-${getName(value)}`}>
                <button
                  className={selectedValue === value ? styles.menuItemActive : styles.menuItem}
                  role="menuitem"
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setValue(value);
                  }}
                >
                  {getPicture && <img className={styles.menuItemPicture} src={getPicture(value)} alt="" />}
                  <div>
                    <b>{getName(value)}</b>
                    {getDescription && <span>{getDescription(value)}</span>}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
