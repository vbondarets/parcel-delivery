import { Request, Response } from 'express';
import ParcelService from '../services/parcel.service';

export class ParcelController {
  constructor(private parcelService: ParcelService) {}
  async getAll(req: Request, res: Response) {}
  async getById(req: Request, res: Response) {}
  async create(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}

const parcelController = new ParcelController(new ParcelService());
export default parcelController;
