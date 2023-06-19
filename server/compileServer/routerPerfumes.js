'use strict';
import { Router } from 'express';
import controller from './controllers/controllersPerfume';
const routerPerfumes = Router();
routerPerfumes.get('/parfumes', controller.getAll);
export default routerPerfumes;
