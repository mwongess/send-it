import{ Router} from 'express'
import {  deleteOrder, getOrder, getOrders, newOrder, updateOrder } from '../Controllers/orderController'

const orouter = Router()



//+++++++++ ORDERS +++++++++++++++++ 
orouter.get('/', getOrders)
orouter.get('/:id',getOrder)
orouter.post('/', newOrder)
orouter.put('/update/:id',updateOrder)
orouter.delete('/:id', deleteOrder)


export default orouter