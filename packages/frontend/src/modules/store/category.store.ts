import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { ICategory } from '../common/types/category.type';

interface ICategoryState {
  categories: ICategory[];
  setCategorise: (value: ICategory[]) => void;
}

export const useCategoryStore = createWithEqualityFn<ICategoryState>((set) => {
  return {
    categories: [],
    setCategorise: (value: ICategory[]): void => {
      set(() => {
        return {
          categories: value
        };
      });
    }
  };
}, shallow);
