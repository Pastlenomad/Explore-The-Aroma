import { Request, Response } from 'express';
import { Parfume } from '../models/parfume';

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const parfumes = await Parfume.findAll();
    res.json(parfumes);
  } catch (e) {
    console.error(e);
    res.status(500).send('Error occurred while fetching data');
  }
};

export default {
  getAll,
};
