import passport from 'passport';
import { NextFunction, Request, Response } from 'express';
import ApiError from '../helpers/error/ApiError';
import { IUser } from '../types/user.type';

export const isAuth = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    passport.authenticate('jwt', { session: false }, (err: Error, user: IUser) => {
      if (!user) {
        return next(ApiError.notAuth('Not authorized: Passport'));
      }
      if (err) {
        return next(ApiError.notAuth('Not authorized: token'));
      }
      req.user = user;
      next();
    })(req, res, next);
  } catch (err) {
    if (err) {
      return next(ApiError.internal(err as string));
    }
  }
};
