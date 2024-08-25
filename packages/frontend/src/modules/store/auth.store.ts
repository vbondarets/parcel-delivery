import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

interface IAuthState {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

export const useAuthStore = createWithEqualityFn<IAuthState>((set) => {
  return {
    isAuth: false,
    setIsAuth: (value: boolean): void => {
      set(() => {
        return {
          isAuth: value
        };
      });
    }
  };
}, shallow);
