import { Router } from 'express';

import authController from '../../controller/auth.controller';
import { wrapper } from '../../middlewares/ctrlWrapper';
import validation from '../../middlewares/validation';
import userRegisterSchema from '../../helpers/joiSchemas/user.register.schema';
import userLoginSchema from '../../helpers/joiSchemas/user.login.schema';
import { isAuth } from '../../middlewares/isAuth';

const authRouter: Router = Router();

authRouter.post(
  '/register',
  validation(userRegisterSchema),
  wrapper(authController.register.bind(authController))
);
authRouter.post(
  '/login',
  validation(userLoginSchema),
  wrapper(authController.login.bind(authController))
);
authRouter.get('/self', isAuth(), wrapper(authController.getSelf.bind(authController)));

export default authRouter;
