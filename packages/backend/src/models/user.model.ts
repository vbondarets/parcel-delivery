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
import { Parcel } from './parcel.model';

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

  @HasMany(() => Parcel, { onDelete: 'CASCADE' })
  parcels!: Parcel[];
}
