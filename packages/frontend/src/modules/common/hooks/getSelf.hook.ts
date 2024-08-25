import { useQuery } from 'react-query';

import { useUserStore } from '../../store/user.store';
import { authService } from '../../services/auth.service';
import { QUERY_KEYS } from '../consts/query.keys';

type TUseGetSelfReturn = {
  isSelfLoading: boolean;
};

export const useGetSelf = (): TUseGetSelfReturn => {
  const { setUser } = useUserStore();

  const { isFetching: isSelfLoading } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: async () => authService.getSelf(),
    onSuccess: (data) => {
      setUser(data);
      localStorage.setItem('token', data.token);
    },
    onError: () => {
      localStorage.removeItem('token');
      setUser();
    },
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false
    // refetchOnReconnect: false,
    // refetchInterval: Number.POSITIVE_INFINITY,
    // retryDelay: Number.POSITIVE_INFINITY
  });

  return { isSelfLoading };
};
