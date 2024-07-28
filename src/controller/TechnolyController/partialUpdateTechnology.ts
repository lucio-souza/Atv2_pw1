import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";
import { checkExistsUserAccount } from "../../middlewares/checkExistsUserAccount";
import { TechnologyBody } from "../../types/TechnologyBody";
import { TechnologyParams } from "../../types/TechnologyParams";

const prisma=new PrismaClient();

export const partialUpdateTechnology=async(req:Request,res:Response)=>{
    const {id}=req.params as TechnologyParams;
    try {
        const technology=await prisma.technology.update({
            where:{
                id
            },
            data:{
                studied:true
            }
        })
        res.status(201).json(technology);
    } catch (error) {
        res.status(404).json({error:"Mensagem de erro"});
    }
}