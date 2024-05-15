import bcrypt, { genSalt } from "bcrypt";
import { Request, Response } from "express";
import { userModel } from "../models/user";
import { decrypt } from "dotenv";

const createUser = async (req:Request, res:Response) => {
    try {
      const { name, email, password, phone_number,role } = req.body;

      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new userModel({
        name,
        email,
        password: hashedPassword,
        phone_number,
        role,
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({email});
    if (!user) {
      return res.status(404).send( {msg: "user not found"});
    }
    const isValid = bcrypt.compare(password, user.password as string)

    if (!isValid){
      return res.status(400).send({msg:"username or password incorrect"})
    }
  } catch(error) {
    return res.status(400).send({error});
  }
}

export {createUser}