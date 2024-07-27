import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";

const prisma=new PrismaClient();

export const findTechnologiesByUsername=async(req:Request,res:Response)=>{
    try {
        const technologies=await prisma.technology.findMany({
            where:{
                idUser:req.userIndex
            }
        })
        res.status(200).json(technologies)
    } catch (error) {
        console.log(error);
    }
}