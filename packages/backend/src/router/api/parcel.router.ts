import { Router } from 'express';

import { wrapper } from '../../middlewares/ctrlWrapper';
import validation from '../../middlewares/validation';
import { isAuth } from '../../middlewares/isAuth';
import parcelController from '../../controller/parcel.controller';
import parcelSchema from '../../helpers/joiSchemas/parcel.creation.schema';

const parcelRouter: Router = Router();

parcelRouter.get('/', isAuth(), wrapper(parcelController.getAll.bind(parcelController)));
parcelRouter.get('/:id', isAuth(), wrapper(parcelController.getById.bind(parcelController)));
parcelRouter.post(
  '/',
  isAuth(),
  validation(parcelSchema),
  wrapper(parcelController.create.bind(parcelController))
);
parcelRouter.patch(
  '/:id',
  isAuth(),
  validation(parcelSchema),
  wrapper(parcelController.update.bind(parcelController))
);
parcelRouter.delete('/:id', isAuth(), parcelController.delete.bind(parcelController));

export default parcelRouter;
