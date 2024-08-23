import {
  AllowNull,
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
  Default,
  Unique,
  BelongsTo,
  ForeignKey
} from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { EParcelType, IParcel } from '../types/parcel.type';
import { User } from './user.model';
import { Category } from './category.model';

@Table({
  timestamps: true
})
export class Parcel extends Model<IParcel> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Unique(true)
  @Column(DataType.UUID)
  parcel_id!: string;

  @AllowNull(false)
  @Column(DataType.STRING(300))
  city_from!: string;

  @AllowNull(false)
  @Column(DataType.STRING(300))
  city_to!: string;

  @AllowNull(false)
  @Column(DataType.STRING(300))
  date_of_despatch!: string;

  @AllowNull(true)
  @Column(DataType.STRING(300))
  description?: string;

  @AllowNull(false)
  @Column(DataTypes.STRING)
  type!: EParcelType;

  @BelongsTo(() => User, 'user_id')
  user!: User;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.UUID)
  user_id!: string;

  @BelongsTo(() => Category, 'category_id')
  category!: Category;

  @ForeignKey(() => Category)
  @AllowNull(true)
  @Column(DataType.UUID)
  category_id?: string;
}
