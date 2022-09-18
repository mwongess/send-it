import{ Router} from 'express'
import {  deleteOrder, getOrder, getOrders, newOrder, updateOrder } from '../Controllers/orderController'
import { verifyToken } from '../Middlewares/verifyToken'

const orouter = Router()



//+++++++++ ORDERS +++++++++++++++++ 
orouter.get('/',verifyToken, getOrders)
orouter.get('/:id',verifyToken,getOrder)
orouter.post('/', newOrder)
orouter.put('/update/:id',verifyToken, updateOrder)
orouter.delete('/:id', deleteOrder)


export default orouter