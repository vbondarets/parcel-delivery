import { UUID } from "crypto";

export interface IUser {
  user_id?: UUID;
  email: string;
  password: string;
  full_name: string;
}
