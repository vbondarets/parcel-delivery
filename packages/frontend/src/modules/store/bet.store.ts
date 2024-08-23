import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { IBet } from '../common/types/bet.type';

interface IBetState {
  bet?: IBet;
  setBet: (value?: IBet) => void;
  bets?: IBet[];
  setBets: (value?: IBet[]) => void;
}

export const useBetStore = createWithEqualityFn<IBetState>((set) => {
  return {
    setBet: (value?: IBet): void => {
      set(() => {
        return {
          bet: value,
        };
      });
    },
    setBets: (value?: IBet[]): void => {
      set(() => {
        return {
          bets: value,
        };
      });
    },
  };
}, shallow);
