import { useMutation, useQuery, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../consts/query.keys';
import { parcelService } from '../../services/parcel.service';
import { useParcelStore } from '../../store/parcel.store';
import { IParcel, TParcelSortQuery } from '../types/parcel.types';
import { isAxiosError } from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

type TUseParcelReturn = {
  parcels: IParcel[];
  setSort: (value: TParcelSortQuery) => void;
  sort: TParcelSortQuery;
  handleParcelCreate: (data: IParcel) => void;
  isParcelCreationLoading: boolean;
  handleParcelUpdate: (data: IParcel) => void;
  isParcelUpdateLoading: boolean;
  handleParcelDelete: (id: string) => void;
  isParcelDeleteLoading: boolean;
  isParcelDeleteSuccess: boolean;
  isParcelUpdateSuccess: boolean;
};

export const useParcel = (): TUseParcelReturn => {
  const { setParcels, parcels, sort, setSort } = useParcelStore();
  const client = useQueryClient();
  const navigate = useNavigate();
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
  const { mutate: parcelCreationMutation, isLoading: isParcelCreationLoading } = useMutation({
    mutationFn: (data: IParcel) => {
      return parcelService.create(data);
    },
    onSuccess: () => {
      client.invalidateQueries([QUERY_KEYS.PARCELS]);
      navigate('/');
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
  const {
    mutate: parcelUpdateMutation,
    isLoading: isParcelUpdateLoading,
    isSuccess: isParcelUpdateSuccess
  } = useMutation({
    mutationFn: (data: IParcel) => {
      return parcelService.update(data.parcel_id as string, data);
    },
    onSuccess: () => {
      client.invalidateQueries([QUERY_KEYS.PARCELS]);
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
  const {
    mutate: parcelDeleteMutation,
    isLoading: isParcelDeleteLoading,
    isSuccess: isParcelDeleteSuccess
  } = useMutation({
    mutationFn: (id: string) => {
      return parcelService.deleteParcel(id);
    },
    onSuccess: () => {
      client.invalidateQueries([QUERY_KEYS.PARCELS]);
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
  const handleParcelCreate = (data: IParcel) => {
    parcelCreationMutation(data);
  };
  const handleParcelUpdate = (data: IParcel) => {
    parcelUpdateMutation(data);
  };
  const handleParcelDelete = (id: string) => {
    parcelDeleteMutation(id);
  };

  return {
    parcels,
    setSort,
    sort,
    handleParcelCreate,
    isParcelCreationLoading,
    isParcelUpdateLoading,
    handleParcelUpdate,
    isParcelDeleteLoading,
    handleParcelDelete,
    isParcelDeleteSuccess,
    isParcelUpdateSuccess
  };
};
