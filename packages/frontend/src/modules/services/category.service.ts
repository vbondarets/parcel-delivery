import { BACKEND_KEYS } from '../common/consts/backend.keys';
import { ICategory } from '../common/types/category.type';

import { HttpSerivce } from './http.service';

class CategoryService extends HttpSerivce {
  constructor() {
    super();
  }
  async getAll(): Promise<ICategory[]> {
    const response = await this.get({
      url: BACKEND_KEYS.CATEGORIES.ALL
    });

    return response.data as ICategory[];
  }
}

export const categoryService = new CategoryService();
