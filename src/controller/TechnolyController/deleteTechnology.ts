import { PrismaClient } from "@prisma/client";
import { Request,Response,NextFunction } from "express";
import { TechnologyParams } from "../../types/TechnologyParams";
import { findTechnologiesByUsername } from "./findTechnologiesByUsername";

const prisma=new PrismaClient();

export const deleteTechnology=async(req:Request,res:Response)=>{
    const {id}=req.params;
    try {
        const deleteTechnology=await prisma.technology.delete({
            where:{
                id
            }
        });
        await findTechnologiesByUsername(req, res);
    } catch (error) {
        res.status(404).json({error:"Mensagem de erro"})
    }
}
