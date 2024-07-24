import express from "express";
import { userRouter } from "./src/routes/UserRoutes";

const app=express();
app.use(express.json())

const porta=8080;

app.use("/user",userRouter)

app.listen(porta,()=>{
    console.log("servidor online");
    
})