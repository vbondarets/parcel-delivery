import { Router } from 'express';

import { wrapper } from '../../middlewares/ctrlWrapper';
import validation from '../../middlewares/validation';
import { isAuth } from '../../middlewares/isAuth';
import categoryController from '../../controller/category.controller';
import categorySchema from '../../helpers/joiSchemas/category.schema';

const categoryRouter: Router = Router();

categoryRouter.get('/', isAuth(), wrapper(categoryController.getAll.bind(categoryController)));
categoryRouter.post(
  '/',
  isAuth(),
  validation(categorySchema),
  wrapper(categoryController.create.bind(categoryController))
);

export default categoryRouter;
