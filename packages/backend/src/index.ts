import bodyParser from 'body-parser';
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import dotenv from 'dotenv';
import cookies from 'cookie-parser';
import { sequelize } from './config/database';

import AppRouter from './router/router';
import errorHandler from './middlewares/ErrorHandler';
import { JWTStrategy } from './utils/strategies/passport';
import { IUser } from './types/user.type';
import { categorySeeder } from './seeders/category/category.seeder';

declare global {
  namespace Express {
    interface User extends IUser {}
  }
}

const app = express();
const router = new AppRouter(app);
dotenv.config();

app.set('port', process.env.PORT || 4200);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: true, credentials: true }));
app.use(cookies());
router.init();
const port = app.get('port');
app.use(JWTStrategy);
app.use(errorHandler);

// eslint-disable-next-line no-console
const server = app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    await categorySeeder();
    console.log(`Server started on port ${port}`);
  } catch (error) {
    await sequelize.close();
    console.log(error);
    process.exit(1);
  }
});

export { server };
