import express, { Router } from "express";
import {getme,registeruser,loginUser} from "../controller/userController.js"
import { protectRoute } from "../middleware/authMiddleware.js";
const userRouter = express.Router();

userRouter.post("/register",registeruser)
userRouter.post("/login",loginUser)
userRouter.get("/me",protectRoute,getme)

export default userRouter;