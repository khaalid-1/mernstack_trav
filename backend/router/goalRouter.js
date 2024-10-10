import express from "express";
import {
  getGoals,
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controller/goalController.js";
const router = express.Router();

router.route("/").get(getGoals).post(setGoal),
  router.route("/:id").get(getGoal).put(updateGoal).delete(deleteGoal);

export default router;
