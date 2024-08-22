import { UUID } from 'crypto';
import { ICategory } from './category.type';

export enum EParcelType {
  'ORDER',
  'DELIVER'
}
export interface IParcel {
  parcel_id?: UUID;
  city_from: string;
  city_to: string;
  date_of_despatch: string;
  description?: string;
  type: EParcelType;
  category: ICategory;
}
