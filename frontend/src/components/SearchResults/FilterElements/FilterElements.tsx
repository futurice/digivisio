import React from 'react';

import { SearchFilter } from '../../../types/Profile';
import removeFilterFromList from '../../../utils/removeFilterFromList';
import FilterElement from '../../common/FilterElement';

type Props = {
  readonly filterList: ReadonlyArray<SearchFilter>;
  readonly setSearchFilterList: (newList: ReadonlyArray<SearchFilter>) => void;
};

const FilterElements = ({ filterList, setSearchFilterList }: Props) => {
  return (
    <>
      {filterList.map(({ key, value }) => (
        <FilterElement
          key={value}
          onClick={() => {
            const newList = removeFilterFromList([...filterList], key);
            setSearchFilterList(newList);
          }}
        >
          {value}
        </FilterElement>
      ))}
    </>
  );
};

export default FilterElements;
