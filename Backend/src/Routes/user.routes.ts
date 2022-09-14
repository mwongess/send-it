import { Router } from "express";
import { checkUser, loginUser, newUser } from "../Controllers/userController";
import { verifyToken } from "../Middlewares/verifyToken";

const urouter = Router();

//+++++++++ USER ROUTES +++++++++++++++++ 
urouter.post('/signup', newUser)
urouter.post('/login', loginUser)
urouter.get("/check", verifyToken, checkUser);

export default urouter;