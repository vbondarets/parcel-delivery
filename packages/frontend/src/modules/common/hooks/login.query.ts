import { authService } from '../../services/auth.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../consts/query.keys';
import { useAuthStore } from '../../store/auth.store';
import { useUserStore } from '../../store/user.store';

export const useLogin = () => {
  const client = useQueryClient();
  const [setIsAuth] = useAuthStore((store) => [store.setIsAuth]);
  const [setUser] = useUserStore((store) => [store.setUser]);

  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      return await authService.login(data);
    },
    onSuccess: (user) => {
      if (user.token) {
        localStorage.setItem('token', user.token);
        setIsAuth(true);
        setUser(user);
      }
      client.setQueryData([QUERY_KEYS.USER], () => user);
    },
  });
};
