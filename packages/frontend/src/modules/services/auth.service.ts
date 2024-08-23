/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BACKEND_KEYS } from '../common/consts/backend.keys';
import { IUser } from '../common/types/user.types';
import { HttpSerivce } from './http.service';

class AuthService extends HttpSerivce {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  async register(data: {
    email: string;
    password: string;
    password_conf: string;
    full_name: string;
  }) {
    const response = await this.post({
      url: BACKEND_KEYS.AUTH.REGISTER,
      data: data,
    });
    return response.data;
  }

  async login(data: { email: string; password: string }): Promise<IUser> {
    const response = await this.post({
      url: BACKEND_KEYS.AUTH.LOGIN,
      data: data,
    });
    return response.data as IUser;
  }

  async getSelf(): Promise<IUser> {
    const response = await this.get({
      url: BACKEND_KEYS.AUTH.SELF,
      // headers: {
      //   Authorazation: `Bearer ${token}`,
      // },
    });
    return response.data as IUser;
  }
}

export const authService = new AuthService();
