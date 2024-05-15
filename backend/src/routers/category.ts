import express from 'express';
import { newCategory  } from '../controllers/category';

const category = express.Router();
category.post('/newCategory', newCategory);
export { category };