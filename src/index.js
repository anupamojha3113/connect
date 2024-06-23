import express from 'express'
import dotenv from 'dotenv'
const app=express();

dotenv.config({
    path:'./env'
})
app.use(express.json());

app.listen(process.env.PORT||8000,()=>{
    console.log(`Server is running at post : ${process.env.PORT}`);
})