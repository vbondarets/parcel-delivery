import { Category } from '../models/category.model';
import ApiError from '../helpers/error/ApiError';

import { ICategory } from '../types/category.type';

export default class CategoryService {
  async getAll(): Promise<any> {
    const categories = await Category.findAll();
    if (!categories || !categories.length) {
      throw ApiError.notFound('Categories not found');
    }
    return categories;
  }

  async create(data: ICategory): Promise<any> {
    const { name } = data;
    const categoryFind = await Category.findOne({ where: { name } });
    if (categoryFind) {
      throw ApiError.conflict('Category alredy exist');
    }
    const category = await Category.create({
      name
    });
    return category;
  }
}
