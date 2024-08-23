/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMutation } from '@tanstack/react-query';
import { authService } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: {
      email: string;
      password: string;
      password_conf: string;
      full_name: string;
    }) => {
      return authService.register(data);
    },
    onSuccess: (data) => {
      if (data.status === 'ok') {
        navigate('/login');
      }
    },
  });
};
