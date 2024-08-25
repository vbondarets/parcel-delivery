import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../consts/query.keys';
import { parcelService } from '../../services/parcel.service';
import { useParcelStore } from '../../store/parcel.store';
import { IParcel, TParcelSortQuery } from '../types/parcel.types';

type TUseParcelReturn = {
  parcels: IParcel[];
  setSort: (value: TParcelSortQuery) => void;
  sort: TParcelSortQuery;
};

export const useParcel = (): TUseParcelReturn => {
  const { setParcels, parcels, sort, setSort } = useParcelStore();
  useQuery({
    queryKey: [QUERY_KEYS.PARCELS, sort],
    queryFn: async () => parcelService.getAll(sort),
    onSuccess: (data) => {
      setParcels(data);
    },
    onError: () => {
      setParcels([]);
    },
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false
  });

  return { parcels, setSort, sort };
};
