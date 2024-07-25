import express from 'express'
import { createTechnology } from '../controller/TechnolyController/createTechnology';
import { findTechnologiesByUsername } from '../controller/TechnolyController/findTechnologiesByUsername';
import { checkExistsUserAccount } from '../middlewares/checkExistsUserAccount';

export const technologyRouter=express.Router();

technologyRouter.post('/',checkExistsUserAccount,createTechnology);
technologyRouter.get('/',checkExistsUserAccount,findTechnologiesByUsername);