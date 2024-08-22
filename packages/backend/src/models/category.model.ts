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
  ForeignKey,
  HasMany
} from 'sequelize-typescript';
import { ICategory } from '../types/category.type';
import { Parcel } from './parcel.model';

@Table({
  timestamps: true
})
export class Category extends Model<ICategory> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Unique(true)
  @Column(DataType.UUID)
  category_id!: string;

  @AllowNull(false)
  @Column(DataType.STRING(300))
  name!: string;

  @HasMany(() => Parcel, { onDelete: 'CASCADE' })
  parcels!: Parcel[];
}
