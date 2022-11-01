import express, { NextFunction, Request, Response,json } from 'express'
import o_router from './Routes/order.routes'
import u_router from './Routes/user.routes'
import startServer from './lib/boot';
import cors from "cors";

const app= express()

app.use(json())
app.use(cors());
// Users
app.use('/user', u_router)

//Orders
app.use('/orders', o_router)

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({Error:err.message})
})

//Start server
startServer(app)
