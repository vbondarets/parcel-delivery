import { UUID } from 'crypto';
import { IParcel } from './parcel.type';

export interface ICategory {
  category_id?: UUID;
  name: string;
  parcels?: IParcel[];
}
