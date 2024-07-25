import express from 'express'
import { createUser } from '../controller/UserController/createUser';
import { checkNoExistsUserAccount }  from '../middlewares/checkNoExistsUser';

export const userRouter = express.Router();

userRouter.post('/',checkNoExistsUserAccount,createUser);