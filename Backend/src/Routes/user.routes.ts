import { Router } from "express";
import { checkUser, loginUser, newUser } from "../Controllers/userController";
import { verifyToken } from "../Middlewares/verifyToken";

const u_router = Router();

u_router
  .post("/signup", newUser)
  .post("/login", loginUser)
  .get("/check", verifyToken, checkUser);

export default u_router;
