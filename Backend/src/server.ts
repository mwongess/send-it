import express, { NextFunction, Request, Response,json } from 'express'
import orouter from './Routes/order.routes'
import urouter from './Routes/user.routes'
import cors from "cors";
import startServer from './lib/boot';
const app= express()

app.use(json())
app.use(cors());
// Users
app.use('/user', urouter)

//Orders
app.use('/orders', orouter)
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({Error:err.message})
})

//Start server
startServer(app)
