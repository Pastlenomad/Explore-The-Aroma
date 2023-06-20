'use strict';
import { Router } from 'express';
import controller from './controllers/controllers.js';
const router = Router();
router.get('/', controller.getAll);
export default router;
