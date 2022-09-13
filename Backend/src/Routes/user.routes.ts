import { Router } from "express";
import { loginUser, newUser } from "../Controllers/userController";

const urouter = Router();

//+++++++++ USER ROUTES +++++++++++++++++ 
urouter.post('/signup', newUser)
urouter.post('/login', loginUser)

export default urouter;