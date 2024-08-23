/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/require-await */
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../../store/auth.store';
import { useUserStore } from '../../store/user.store';
import { QUERY_KEYS } from '../consts/query.keys';

export const useLogOut = () => {
  const [setIsAuth] = useAuthStore((state) => [state.setIsAuth]);
  const { setUser } = useUserStore();
  const client = useQueryClient();
  const removeToken = () => {
    console.log('removeItem');
    client.removeQueries({ queryKey: [QUERY_KEYS.USER], exact: true });
    setIsAuth(false);
    setUser();
    localStorage.removeItem('token');
  };

  return useMutation({
    mutationFn: async () => {
      removeToken();
    },
    onSuccess: async () => {
      removeToken();
    },
    onMutate: () => {
      removeToken();
    },
  });
};
