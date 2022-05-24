import classNames from 'classnames';
import React from 'react';

import styles from './Button.module.css';

type Props = {
  readonly children: React.ReactNode;
  readonly isSubmit?: boolean;
  readonly className?: string;
  readonly ariaLabel?: string;
};

const Button = ({ children, className, isSubmit, ariaLabel }: Props) => {
  return (
    <button
      className={classNames(styles.button, className)}
      type={isSubmit ? 'submit' : 'button'}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
