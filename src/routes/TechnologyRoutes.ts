import express from 'express'
import { createTechnology } from '../controller/TechnolyController/createTechnology';
import { findTechnologiesByUsername } from '../controller/TechnolyController/findTechnologiesByUsername';
import { checkExistsUserAccount } from '../middlewares/checkExistsUserAccount';
import { updateTechnology } from '../controller/TechnolyController/updateTechnology';
import { partialUpdateTechnology } from '../controller/TechnolyController/partialUpdateTechnology';
import { deleteTechnology } from '../controller/TechnolyController/deleteTechnology';

export const technologyRouter=express.Router();

technologyRouter.post('/',checkExistsUserAccount,createTechnology);
technologyRouter.get('/',checkExistsUserAccount,findTechnologiesByUsername);
technologyRouter.put('/:id',checkExistsUserAccount,updateTechnology);
technologyRouter.patch('/:id/studied',checkExistsUserAccount,partialUpdateTechnology);
technologyRouter.delete('/:id',checkExistsUserAccount,deleteTechnology);