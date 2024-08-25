import { Request, Response } from 'express';
import CategoryService from '../services/category.service';
import { ICategory } from '../types/category.type';

export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  async getAll(req: Request, res: Response) {
    const categories = await this.categoryService.getAll();
    return res.json(categories);
  }
  async create(req: Request, res: Response) {
    const category = await this.categoryService.create(req.body as ICategory);
    return res.json(category);
  }
}

const categoryController = new CategoryController(new CategoryService());
export default categoryController;
