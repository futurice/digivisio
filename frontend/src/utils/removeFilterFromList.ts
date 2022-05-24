import { SearchFilter } from '../types/Profile';

const removeFilterFromList = (list: readonly SearchFilter[], deselectedKey: string) => {
  return list.filter(({ key }) => key !== deselectedKey);
};

export default removeFilterFromList;
