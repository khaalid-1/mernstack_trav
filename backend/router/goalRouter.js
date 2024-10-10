import express from "express";
import {
  getGoals,
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controller/goalController.js";
const goalRouter = express.Router();

goalRouter.route("/").get(getGoals).post(setGoal),
goalRouter.route("/:id").get(getGoal).put(updateGoal).delete(deleteGoal);

export default goalRouter;
