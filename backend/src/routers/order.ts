import express from 'express';
import { newOrder  } from '../controllers/order';


const order = express.Router();
order.post('/order', newOrder);
export { order };