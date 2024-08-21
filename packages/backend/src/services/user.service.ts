import { User } from "../models/user.model";
import ApiError from "../helpers/error/ApiError";
import { IUser } from "../types/user.type";

export default class UserService {
  async createUser<T extends IUser>(body: T): Promise<IUser> {
    const { email, password, full_name } = body;
    const userFind = await User.findOne({ where: { email: email } });
    if (userFind) {
      throw ApiError.conflict("User alredy exist");
    }
    const user = await User.create({
      email: email,
      full_name: full_name,
      password: password,
    });
    if (user) {
      return {
        user_id: user.dataValues.user_id,
        email,
        password: "pass",
        full_name,
      };
    }
    throw ApiError.conflict("Wrong data");
  }
  async getUserByEmail(email: string): Promise<IUser> {
    const user = await User.findOne({
      where: { email: email },
    });
    if (user) {
      return {
        ...user.dataValues,
      };
    }
    throw ApiError.notFound("User not found");
  }
  async getUserById(user_id: string): Promise<IUser | null> {
    const user = await User.findOne({
      where: { user_id: user_id },
    });
    if (user) {
      return { ...user.dataValues, password: "pass" };
    }
    return null;
  }
}
