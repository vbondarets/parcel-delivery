import { Parcel } from '../models/parcel.model';
import ApiError from '../helpers/error/ApiError';
import { EParcelType, IParcel } from '../types/parcel.type';
import { Category } from '../models/category.model';
import { IUser } from '../types/user.type';
import { UUID } from 'crypto';

export default class ParcelService {
  async getAll(user: IUser): Promise<IParcel[]> {
    const parcels = await Parcel.findAll({
      where: { user_id: user.user_id },
      order: [['createdAt', 'DESC']],
      include: [Category]
    });
    if (!parcels || !parcels.length) {
      throw ApiError.notFound('Parcels not found');
    }
    return parcels as IParcel[];
  }

  async getById(id: string): Promise<IParcel> {
    const parcel = await Parcel.findOne({ where: { parcel_id: id } });
    if (!parcel) {
      throw ApiError.notFound('Parcel not found');
    }
    return parcel as IParcel;
  }

  async create(data: IParcel, user: IUser): Promise<IParcel> {
    if (data.type === EParcelType.ORDER) {
      const category = await Category.findOne({ where: { category_id: data.category_id as UUID } });
      if (!category) {
        throw ApiError.notFound('Category not found');
      }
    }
    const parcel = await Parcel.create({
      city_from: data.city_from,
      city_to: data.city_to,
      date_of_despatch: data.date_of_despatch,
      type: data.type,
      user_id: user.user_id as UUID,
      category_id: data.type === EParcelType.ORDER ? (data.category_id as UUID) : null,
      description: data.type === EParcelType.ORDER ? data.description : null
    });
    return parcel as IParcel;
  }

  async update(id: string, data: IParcel, user: IUser): Promise<IParcel> {
    if (data.type === EParcelType.ORDER) {
      const category = await Category.findOne({ where: { category_id: data.category_id as UUID } });
      if (!category) {
        throw ApiError.notFound('Category not found');
      }
    }
    const parcel = await Parcel.findOne({ where: { parcel_id: id, user_id: user.user_id } });
    if (parcel) {
      await parcel.update({ ...data });
      if (data.type === EParcelType.ORDER) {
        parcel.category_id = undefined;
        parcel.description = undefined;
      }
      await parcel.save();
      return parcel as IParcel;
    }
    throw ApiError.notFound('Parcel not found');
  }

  async delete(id: string, user: IUser): Promise<any> {
    const res = await Parcel.destroy({ where: { parcel_id: id, user_id: user.user_id } });
    if (!res) {
      throw ApiError.internal();
    }
    return;
  }
}
