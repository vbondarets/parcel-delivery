import { useMutation, useQueryClient } from 'react-query';
import { useAuthStore } from '../../store/auth.store';
import { useUserStore } from '../../store/user.store';
import { authService } from '../../services/auth.service';
import { QUERY_KEYS } from '../consts/query.keys';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import Swal from 'sweetalert2';
import { ILogin, IRegister } from '../types/user.types';

type TUseAuthReturn = {
  isLoginLoading: boolean;
  handleLogin: (data: ILogin) => void;
  handleRegister: (data: IRegister) => void;
  handleLogout: () => void;
};

export const useAuth = (): TUseAuthReturn => {
  const client = useQueryClient();
  const { setIsAuth } = useAuthStore();
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const { mutate: LoginMutation, isLoading: isLoginLoading } = useMutation({
    mutationFn: async (data: ILogin) => {
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
    onError: (error) => {
      if (isAxiosError(error)) {
        Swal.fire({
          icon: 'error',
          title: 'Request error',
          text: error.response?.data.message as string
        });
      }
    }
  });

  const removeToken = () => {
    client.removeQueries({ queryKey: [QUERY_KEYS.USER], exact: true });
    setIsAuth(false);
    setUser();
    localStorage.removeItem('token');
  };

  const { mutate: LogoutMutation } = useMutation({
    mutationFn: async () => {
      removeToken();
    }
  });
  const { mutate: RegisterMutation } = useMutation({
    mutationFn: (data: IRegister) => {
      return authService.register(data);
    },
    onSuccess: (data) => {
      if (data.status === 'ok') {
        navigate('/login');
      }
    }
  });
  const handleLogin = (data: ILogin) => {
    LoginMutation(data);
  };
  const handleLogout = () => {
    LogoutMutation();
  };
  const handleRegister = (data: IRegister) => {
    RegisterMutation(data);
  };
  return { handleLogin, isLoginLoading, handleRegister, handleLogout };
};
