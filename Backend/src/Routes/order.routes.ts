import { Router } from "express";
import {
  deleteOrder,
  getOrder,
  getOrders,
  newOrder,
  updateOrder,
} from "../Controllers/orderController";
import { verifyToken } from "../Middlewares/verifyToken";

const o_router = Router();

o_router
  .get("/", verifyToken, getOrders)
  .get("/:id", verifyToken, getOrder)
  .post("/", verifyToken, newOrder)
  .put("/update/:id", verifyToken, updateOrder)
  .delete("/:id", verifyToken, deleteOrder);

export default o_router;
