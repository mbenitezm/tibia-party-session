import { Router } from 'express';
import { calculate } from '../controllers/';

export const calculatorRouter = Router();

calculatorRouter.get('/calculate', calculate);
