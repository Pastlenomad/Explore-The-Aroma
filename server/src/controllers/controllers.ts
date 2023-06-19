'use strict';

import {Parfume} from '../models/schemas/parfumeSchema';
import { Request, Response } from 'express';

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const parfumes = await Parfume.find();
    res.json(parfumes);
  } catch (e) {
    console.error(e);
    res.status(500).send('Error occurred while fetching data');
  }
};

export default {
  getAll,
};
