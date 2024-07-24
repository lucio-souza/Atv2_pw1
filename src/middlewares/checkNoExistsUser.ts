import { PrismaClient } from '@prisma/client';
import { Request, Response,NextFunction } from 'express';

const prisma=new PrismaClient();

const checkNoExistsUserAccount=async (req:Request,res:Response,next:NextFunction)=>{
    const {username}=req.body;
    try {
        const user=await prisma.user.findUnique({
            where:{
                username
            },
        })
        if(user){
            res.status(404).send("usuario já existe");
        }
        next();
    }
    catch(error){
        console.error('Erro ao verificar a existência do usuário:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
    }

export default checkNoExistsUserAccount;