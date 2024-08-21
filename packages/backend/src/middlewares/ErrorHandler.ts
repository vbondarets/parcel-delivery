import { Request, Response, NextFunction } from 'express';
import ApiError from '../helpers/error/ApiError';

export default <T extends {status: number, message: string}>(err: T, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'unknown error' });
};