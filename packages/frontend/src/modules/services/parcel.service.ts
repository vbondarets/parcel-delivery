import { BACKEND_KEYS } from '../common/consts/backend.keys';
import { IParcel, TParcelSortQuery } from '../common/types/parcel.types';
import { HttpSerivce } from './http.service';

class ParcelService extends HttpSerivce {
  constructor() {
    super();
  }
  async getAll(sort: TParcelSortQuery): Promise<IParcel[]> {
    const response = await this.get({
      url: BACKEND_KEYS.PARCEL.ALL,
      params: {
        sort
      }
    });

    return response.data as IParcel[];
  }
  async create(data: IParcel): Promise<IParcel> {
    const response = await this.post({
      url: BACKEND_KEYS.PARCEL.ALL,
      data
    });
    return response.data as IParcel;
  }
  async update(id: string, data: IParcel): Promise<IParcel> {
    const response = await this.patch({
      url: `${BACKEND_KEYS.PARCEL.ALL + id}`,
      data
    });
    return response.data as IParcel;
  }
  async deleteParcel(id: string): Promise<void> {
    await this.delete({
      url: `${BACKEND_KEYS.PARCEL.ALL + id}`
    });
  }
}

export const parcelService = new ParcelService();
