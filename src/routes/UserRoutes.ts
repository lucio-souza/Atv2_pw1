import express from 'express'
import { createUser } from '../controller/UserController/createUser';
import checkNoExistsUserAccount from '../middlewares/checkNoExistsUser';

const userRouter = express.Router();

userRouter.post('/',checkNoExistsUserAccount,createUser);

export {userRouter};