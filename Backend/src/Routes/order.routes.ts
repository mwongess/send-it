import{ Router} from 'express'
import {  deleteOrder, getOrder, getOrders, newOrder, updateOrder } from '../Controllers/orderController'
import { verifyToken } from '../Middlewares/verifyToken'

const orouter = Router()



//+++++++++ ORDERS +++++++++++++++++ 
orouter.get('/',verifyToken, getOrders)
.get('/:id',verifyToken,getOrder)
.post('/', verifyToken, newOrder)
.put('/update/:id',verifyToken, updateOrder)
.delete('/:id', verifyToken,deleteOrder)


export default orouter