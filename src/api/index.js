import express from 'express';
import { calculatorRouter } from './routes/';

const api = express();
api.use('/calculator', calculatorRouter);

export default api;
