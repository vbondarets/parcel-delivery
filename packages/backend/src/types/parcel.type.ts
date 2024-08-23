import { UUID } from 'crypto';
import { ICategory } from './category.type';

export enum EParcelType {
  ORDER = 'ORDER',
  DELIVER = 'DELIVER'
}
export interface IParcel {
  parcel_id?: UUID;
  city_from: string;
  city_to: string;
  date_of_despatch: string;
  description: string | null;
  type: EParcelType;
  category?: ICategory;
  category_id: UUID | null;
  createdAt?: string;
  user_id: UUID;
}
