import express from 'express';
import { newFood  } from '../controllers/food';


const food = express.Router();
food.post('/newfood', newFood);
export { food };