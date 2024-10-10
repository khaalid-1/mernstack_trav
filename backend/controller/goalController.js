import asynHandler from "express-async-handler";
import Goal from "../model/goalModel.js";
export const setGoal = asynHandler(async (req, res) => {

    const text = req.body.text;
    if(!text){
        res.status(400)
        throw new Error("Please Enter your goal ")
    }

  const goal = new Goal({text})
  await goal.save()
  res.status(200).json({
    status: true,
    goal: goal,
  });
});

export const getGoals = asynHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({
    status: true,
    data: goals,
  });
});

export const updateGoal = asynHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error("goal not found")
    }
    const updateGoal = await Goal.findByIdAndUpdate(goal,req.body,{new:true});

  res.status(200).json({
    status: true,
    data :updateGoal,
  });
});

export const getGoal = asynHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error("goal not found")
    }
  res.status(200).json({
    status: true,
    data: goal,
  });
});

export const deleteGoal = asynHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error("goal not found")
    }
    await Goal.findByIdAndDelete(goal);
  res.status(204).json({
    status: true,
    data: goal,
  });
});
