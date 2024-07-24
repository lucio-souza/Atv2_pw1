import express from "express";
import { createUser } from "./src/controller/userController";

const app=express();
app.use(express.json())

const porta=8080;

app.post("/user",createUser)

app.listen(porta,()=>{
    console.log("servidor online");
    
})