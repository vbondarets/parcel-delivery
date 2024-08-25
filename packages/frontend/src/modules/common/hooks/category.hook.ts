import { useQuery } from 'react-query';

import { QUERY_KEYS } from '../consts/query.keys';
import { useCategoryStore } from '../../store/category.store';
import { ICategory } from '../types/category.type';
import { categoryService } from '../../services/category.service';

type TUseCategoryReturn = {
  isCategoryLoading: boolean;
  categories: ICategory[];
};

export const useCategory = (): TUseCategoryReturn => {
  const { setCategorise, categories } = useCategoryStore();

  const { isFetching: isCategoryLoading } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: async () => categoryService.getAll(),
    onSuccess: (data) => {
      setCategorise(data);
    },
    onError: () => {
      setCategorise([]);
    },
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false
  });

  return { isCategoryLoading, categories };
};
