import express from "express";
import {
  getGoals,
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controller/goalController.js";
import { protectRoute } from "../middleware/authMiddleware.js";
const goalRouter = express.Router();

goalRouter.route("/").get(protectRoute, getGoals).post(protectRoute, setGoal),
  goalRouter
    .route("/:id")
    .get(protectRoute, getGoal)
    .put(protectRoute,updateGoal)
    .delete(protectRoute,deleteGoal);

export default goalRouter;
