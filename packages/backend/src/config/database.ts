// import mongoose from 'mongoose';
import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';
import { Parcel } from '../models/parcel.model';
import { Category } from '../models/category.model';

export const sequelize = new Sequelize(
  process.env.POSTGRES_DB_NAME || 'postgres',
  process.env.POSTGRES_DB_USER || 'postgres',
  process.env.POSTGRES_DB_PASSWORD || 'postgres',

  {
    host: process.env.POSTGRES_DB_HOST || 'localhost',
    port: process.env.POSTGRES_DB_PORT ? Number(process.env.POSTGRES_DB_PORT) : 5432,
    dialect: 'postgres',
    models: [User, Parcel, Category]
  }
);
