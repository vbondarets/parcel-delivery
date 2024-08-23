/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
/* eslint-disable arrow-body-style */

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../consts/query.keys';
import { authService } from '../../services/auth.service';
import { useEffect } from 'react';
import { useUserStore } from '../../store/user.store';

export const useGetSelf = () => {
  const [setUser] = useUserStore((state) => [state.setUser]);
  const { isLoading, data, isError } = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: async () => {
      const res = await authService.getSelf();
      setUser(res);
      return res;
    },
    refetchOnMount: true,
    retry: false,
    // retryDelay: 300,
  });
  useEffect(() => {
    if (isError) {
      localStorage.removeItem('token');
      setUser();
    }
  }, [isError]);
  if (data && data.token) {
    localStorage.setItem('token', data.token);
  }
  return { isLoading, data };
};
