import ApiError from '../helpers/error/ApiError';
import { IParcel } from '../types/parcel.type';

export default class ParcelService {
  async getAll(): Promise<IParcel[]> {
    throw ApiError.conflict('Wrong data');
  }
  async getById(id: string): Promise<any> {}
  async create(data: IParcel): Promise<any> {}
  async update(): Promise<any> {}
  async delete(): Promise<any> {}
}
