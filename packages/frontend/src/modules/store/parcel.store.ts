import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { IParcel, TParcelSortQuery } from '../common/types/parcel.types';

interface IParcelState {
  parcels: IParcel[];
  setParcels: (value: IParcel[]) => void;
  sort: TParcelSortQuery;
  setSort: (value: TParcelSortQuery) => void;
}

export const useParcelStore = createWithEqualityFn<IParcelState>((set) => {
  return {
    parcels: [],
    sort: 'default',
    setParcels: (value: IParcel[]): void => {
      set(() => {
        return {
          parcels: value
        };
      });
    },
    setSort: (value: TParcelSortQuery): void => {
      set(() => {
        return {
          sort: value
        };
      });
    }
  };
}, shallow);
