import { PrismaClient } from "@prisma/client";
import {v4 as uuid} from 'uuid'
import { Request,Response } from "express";
import { TechnologyType } from "../../types/TechnologyType";

const prisma=new PrismaClient();

export const createTechnology=async(req: Request<{}, {}, TechnologyType>,res:Response)=>{
    const {title,deadline}=req.body;
    try {
        const technology=await prisma.technology.create({
            data:{
                id:uuid(),
                title,
                deadline:new Date(deadline),
                idUser:req.userIndex
            }
        })
        res.status(201).json(technology)
    } catch (error) {
        console.log(error);
    }
}