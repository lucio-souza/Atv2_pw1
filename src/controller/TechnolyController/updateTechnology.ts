import { PrismaClient } from "@prisma/client";
import {Request,Response} from "express"
import { TechnologyBody } from "../../types/TechnologyBody";
import { TechnologyParams } from "../../types/TechnologyParams";

const prisma=new PrismaClient();

export const updateTechnology=async(req:Request<TechnologyParams, TechnologyBody>,res:Response)=>{
    const {id}=req.params;
    const {title,deadline}=req.body

    try{
        const technology=await prisma.technology.update({
            where:{
                id
            },
            data:{
                title,
                deadline:new Date(deadline)
            }
        });
        res.status(201).json(technology);
    }catch(error){
        console.log(error);
        res.status(404).json({error:"Mensagem de erro"})
    }
}