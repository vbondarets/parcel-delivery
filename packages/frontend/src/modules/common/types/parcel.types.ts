import { ICategory } from './category.type';

export enum EParcelType {
  ORDER = 'ORDER',
  DELIVER = 'DELIVER'
}
export interface IParcel {
  parcel_id?: string;
  city_from: string;
  city_to: string;
  date_of_dispatch: string;
  description: string | null;
  type: EParcelType;
  category: ICategory | null;
  category_id: string | null;
  createdAt?: string;
  user_id: string;
}
export type TParcelSortQuery = 'default' | 'dispatch';
