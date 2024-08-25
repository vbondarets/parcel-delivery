import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { IUser } from '../types/user.type';
import UserService from '../services/user.service';
import ApiError from '../helpers/error/ApiError';
import { tokenGenerator, verify } from '../utils/jwt/jwt';

export class AuthController {
  constructor(private userService: UserService) {}

  async register(req: Request, res: Response, next: NextFunction) {
    const { email, password, full_name }: IUser = req.body;
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);
    const user = await this.userService.createUser({
      email,
      password: hasedPassword,
      full_name
    });
    if (user) {
      return res.send({ status: 'ok' });
    } else {
      return next(ApiError.internal());
    }
  }

  async login(req: Request, res: Response) {
    const { email, password }: IUser = req.body;
    const user = await this.userService.getUserByEmail(email);
    console.log(user);
    if (bcrypt.compareSync(password, user.password)) {
      const token = tokenGenerator({ ...user, password: 'pass', bets: [] });
      return res.json({ ...user, password: 'pass', token });
    }
    throw ApiError.conflict('Wrong password');
  }

  async getSelf(req: Request, res: Response) {
    const currUser = req.user;
    if (currUser) {
      const user = await this.userService.getUserById(currUser.user_id as string);
      if (user) {
        const token = tokenGenerator({ ...user, password: 'pass', bets: [] });
        return res.json({ ...user, password: 'pass', token });
      }
      throw ApiError.notAuth();
    }
    throw ApiError.notAuth();
  }
}

const authController = new AuthController(new UserService());
export default authController;
