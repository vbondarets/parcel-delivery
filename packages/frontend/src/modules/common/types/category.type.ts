import { IParcel } from './parcel.types';

export interface ICategory {
  category_id: string;
  name: string;
  parcels?: IParcel[];
}
