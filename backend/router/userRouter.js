import express, { Router } from "express";
import {getme,registeruser,loginUser} from "../controller/userController.js"

const userRouter = express.Router();

userRouter.post("/register",registeruser)
userRouter.post("/login",loginUser)
userRouter.get("/me",getme)

export default userRouter;