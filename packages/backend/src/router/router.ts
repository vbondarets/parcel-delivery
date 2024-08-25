import { Application } from 'express';
import authRouter from './api/auth.router';
import parcelRouter from './api/parcel.router';
import categoryRouter from './api/category.router';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/api', (_req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/auth', authRouter);
    this.app.use('/api/parcel', parcelRouter);
    this.app.use('/api/category', categoryRouter);
  }
}

export default AppRouter;
