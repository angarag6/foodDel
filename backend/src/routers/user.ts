import express from "express";
import { createUser } from "../controllers/user";

const auth = express.Router();

auth.route('/signup').post(createUser);

export {auth};