import express from "express";
import {
  getGoals,
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controller/goalController.js";
const userRouter = express.Router();

userRouter.route("/").get(getGoals).post(setGoal),
userRouter.route("/:id").get(getGoal).put(updateGoal).delete(deleteGoal);

export default userRouter;
