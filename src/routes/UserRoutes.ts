import express from 'express'
import { createUser } from '../controller/UserController/createUser';

export const userRouter = express.Router();

userRouter.post('/',createUser);