export interface IUser {
  user_id?: string;
  email: string;
  password: string;
  full_name: string;
  token: string;
}
export interface ILogin {
  email: string;
  password: string;
}
export interface IRegister {
  email: string;
  password: string;
  full_name: string;
  password_conf: string;
}
