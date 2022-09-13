import express, { NextFunction, Request, Response,json } from 'express'
import orouter from './Routes/order.routes'
import urouter from './Routes/user.routes'
const app= express()

app.use(json())
// +++++++++ USERS ++++++++++++++
app.use('/user', urouter)

// ++++++++ ORDERS ++++++++++++++
app.use('/orders', orouter)
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({Error:err.message})
})

// ++++++++ SERVER +++++++++++++
app.listen(4003, ()=>{
console.log('App is Running on port 4003');

})