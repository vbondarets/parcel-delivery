import { Request, Response } from 'express';
import ParcelService from '../services/parcel.service';
import { IParcel } from '../types/parcel.type';
import { IUser } from '../types/user.type';

export class ParcelController {
  constructor(private parcelService: ParcelService) {}
  async getAll(req: Request, res: Response) {
    const user = req.user;
    const parcels = await this.parcelService.getAll(user as IUser);
    return res.json(parcels);
  }
  async getById(req: Request, res: Response) {
    const { id } = req.params;
    return this.parcelService.getById(id);
  }
  async create(req: Request, res: Response) {
    const user = req.user;
    const parcel = await this.parcelService.create(req.body as IParcel, user as IUser);
    return res.json(parcel);
  }
  async update(req: Request, res: Response) {
    const user = req.user;
    const { id } = req.params;
    return this.parcelService.update(id, req.body as IParcel, user as IUser);
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const user = req.user;
    return this.parcelService.delete(id, user as IUser);
  }
}

const parcelController = new ParcelController(new ParcelService());
export default parcelController;