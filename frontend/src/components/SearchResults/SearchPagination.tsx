import React from 'react';

import { ReactComponent as LeftArrow } from '../../assets/icons/keyboard_arrow_left.svg';
import { ReactComponent as RightArrow } from '../../assets/icons/keyboard_arrow_right.svg';
import styles from './SearchPagination.module.css';

type Props = {
  readonly currentPage: number;
  readonly lastPage: number;
  readonly onPageChange: (page: number) => void;
};

const SearchPagination = ({ currentPage, lastPage, onPageChange }: Props) => {
  const items = Math.min(lastPage - 2, 5);
  const offset = Math.min(Math.max(currentPage - 2, 2), lastPage - 5) + Math.max(0, 5 - items);
  const pagingPages = [1, ...Array.from({ length: items }, (_x, i) => i).map((i) => i + offset), lastPage];
  const previousPage = currentPage > 1 ? currentPage - 1 : currentPage;
  const nextPage = currentPage < lastPage ? currentPage + 1 : currentPage;

  return (
    <div className={styles.pagination}>
      {lastPage > 1 && (
        <>
          <a
            href={`?page=${previousPage}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(previousPage);
            }}
          >
            <LeftArrow className={styles.arrow} />
          </a>
          {pagingPages.map((p) => (
            <a
              className={currentPage === p ? styles.currentPage : ''}
              href={`?page=${p}`}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(p);
              }}
            >
              {p}
            </a>
          ))}
          <a
            href={`?page=${nextPage}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(nextPage);
            }}
          >
            <RightArrow className={styles.arrow} />
          </a>
        </>
      )}
    </div>
  );
};

export default SearchPagination;
