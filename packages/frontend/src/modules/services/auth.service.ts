import { BACKEND_KEYS } from '../common/consts/backend.keys';
import { ILogin, IRegister, IUser } from '../common/types/user.types';
import { HttpSerivce } from './http.service';

class AuthService extends HttpSerivce {
  constructor() {
    super();
  }

  async register(data: IRegister) {
    const response = await this.post({
      url: BACKEND_KEYS.AUTH.REGISTER,
      data: data
    });
    return response.data;
  }

  async login(data: ILogin): Promise<IUser> {
    const response = await this.post({
      url: BACKEND_KEYS.AUTH.LOGIN,
      data: data
    });
    return response.data as IUser;
  }

  async getSelf(): Promise<IUser> {
    const response = await this.get({
      url: BACKEND_KEYS.AUTH.SELF
    });
    return response.data as IUser;
  }
}

export const authService = new AuthService();
