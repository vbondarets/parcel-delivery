import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { IUser } from '../common/types/user.types';

interface IUserState {
  user?: IUser;
  setUser: (value?: IUser) => void;
}

export const useUserStore = createWithEqualityFn<IUserState>((set) => {
  return {
    setUser: (value?: IUser): void => {
      set(() => {
        return {
          user: value,
        };
      });
    },
  };
}, shallow);
