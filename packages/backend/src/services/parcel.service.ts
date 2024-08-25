import { Parcel } from '../models/parcel.model';
import ApiError from '../helpers/error/ApiError';
import { EParcelType, IParcel, TParcelSortQuery } from '../types/parcel.type';
import { Category } from '../models/category.model';
import { IUser } from '../types/user.type';
import { UUID } from 'crypto';
import moment from 'moment';

export default class ParcelService {
  async getAll(user: IUser, sort: TParcelSortQuery): Promise<Parcel[]> {
    const parcels = await Parcel.findAll({
      where: { user_id: user.user_id },
      order: [sort === 'dispatch' ? ['date_of_dispatch', 'ASC'] : ['createdAt', 'ASC']],
      include: [Category]
    });
    if (!parcels || !parcels.length) {
      throw ApiError.notFound('Parcels not found');
    }
    return parcels;
  }

  async getById(id: string): Promise<Parcel> {
    const parcel = await Parcel.findOne({ where: { parcel_id: id } });
    if (!parcel) {
      throw ApiError.notFound('Parcel not found');
    }
    return parcel;
  }

  async create(data: IParcel, user: IUser): Promise<Parcel> {
    if (data.type === EParcelType.ORDER) {
      const category = await Category.findOne({ where: { category_id: data.category_id as UUID } });
      if (!category) {
        throw ApiError.notFound('Category not found');
      }
    }
    const parcel = await Parcel.create({
      city_from: data.city_from,
      city_to: data.city_to,
      date_of_dispatch: moment(data.date_of_dispatch, 'DD-MM-YYYY').utc().format(),
      type: data.type,
      user_id: user.user_id as UUID,
      category_id: data.type === EParcelType.ORDER ? (data.category_id as UUID) : null,
      description: data.type === EParcelType.ORDER ? data.description : null
    });
    return parcel;
  }

  async update(id: string, data: IParcel, user: IUser): Promise<Parcel> {
    console.log('update: ', data);
    if (data.type === EParcelType.ORDER) {
      const category = await Category.findOne({ where: { category_id: data.category_id as UUID } });
      if (!category) {
        throw ApiError.notFound('Category not found');
      }
    }
    const parcel = await Parcel.findOne({ where: { parcel_id: id, user_id: user.user_id } });
    if (parcel) {
      await parcel.update({
        ...data,
        date_of_dispatch: moment(data.date_of_dispatch, 'DD-MM-YYYY').utc().format()
      });
      if (data.type === EParcelType.DELIVER) {
        parcel.category_id = null;
        parcel.description = null;
      }
      await parcel.save();
      return parcel;
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
