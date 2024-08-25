import { Category } from '../../models/category.model';
import path from 'path';
import fs from 'fs';

export const categorySeeder = async () => {
  const categoriesCount = await Category.count();

  if (categoriesCount < 1) {
    const filepath = path.join(__dirname, './', 'category.json');
    const json = fs.readFileSync(filepath, 'utf8');
    const data = JSON.parse(json);
    await Category.bulkCreate(data);
  }
};
