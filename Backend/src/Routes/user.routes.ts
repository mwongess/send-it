import { Router } from "express";
import { checkUser, loginUser, newUser } from "../Controllers/userController";
import { verifyToken } from "../Middlewares/verifyToken";

const urouter = Router();

//+++++++++ USER ROUTES +++++++++++++++++ 
urouter.post('/signup', newUser)
.post('/login', loginUser)
.get("/check", verifyToken, checkUser);

export default urouter;