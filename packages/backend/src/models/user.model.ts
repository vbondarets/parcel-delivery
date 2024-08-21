// import { DataTypes, Model, UUIDV4 } from 'sequelize';
// import { sequelize } from '../config/database';
// import { IUser } from '../types/user.type';

// export const User = sequelize.define<Model<IUser>, IUser>('User', {
//   user_id: { type: DataTypes.UUID, primaryKey: true, defaultValue: UUIDV4 },
//   email: { type: DataTypes.STRING, unique: true, allowNull: false },
//   password: { type: DataTypes.STRING, allowNull: false },
//   full_name: { type: DataTypes.STRING, allowNull: false },
//   balance: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
//   trade_link: { type: DataTypes.STRING, allowNull: true }
// });

import {
  AllowNull,
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
  Default,
  Unique,
  HasMany
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { IUser } from '../types/user.type';

@Table({
  timestamps: true
})
export class User extends Model<IUser> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  user_id!: string;

  @AllowNull(false)
  @Unique(true)
  @Column(DataType.STRING(300))
  email!: string;

  @AllowNull(true)
  @Unique(false)
  @Column(DataType.STRING(300))
  password?: string;

  @AllowNull(false)
  @Unique(false)
  @Column(DataTypes.STRING)
  full_name?: string;
}
