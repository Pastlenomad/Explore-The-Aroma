'use strict';

import { Router } from 'express';
import controller from './controllers/controllers';

const router = Router();

router.get('/', controller.getAll);

export default router;

