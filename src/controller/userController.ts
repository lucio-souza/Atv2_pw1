import { PrismaClient } from "@prisma/client";
import {v4 as uuid} from "uuid"
import { userbody } from "../types/UserType";
import { Request,Response } from "express";

const prisma=new PrismaClient();

const createUser=async(req:Request<{},{},userbody>,res:Response)=>{
    const {name,username}=req.body;
    try {
        const newUser=await prisma.user.create({
            data:{
                id:uuid(),
                name,
                username
            }
        })
        res.status(201).json(newUser);
    } catch (e) {
        res.status(400).send("erro ao criar usuario")
    }
}

export {createUser}