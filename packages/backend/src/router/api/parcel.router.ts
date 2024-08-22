import { Router } from 'express';

import { wrapper } from '../../middlewares/ctrlWrapper';
import validation from '../../middlewares/validation';
import { isAuth } from '../../middlewares/isAuth';
import parcelController from '../../controller/parcel.controller';

const authRouter: Router = Router();

authRouter.get('/', isAuth(), wrapper(parcelController.getAll.bind(parcelController)));
authRouter.get('/:id', isAuth(), wrapper(parcelController.getById.bind(parcelController)));
authRouter.post(
  '/',
  isAuth(),
  // validation(),
  wrapper(parcelController.create.bind(parcelController))
);
authRouter.patch(
  '/:id',
  isAuth(),
  // validation(),
  wrapper(parcelController.update.bind(parcelController))
);
authRouter.delete('/:id', isAuth(), parcelController.delete.bind(parcelController));

export default authRouter;
