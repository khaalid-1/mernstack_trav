import asynHandler from "express-async-handler";
import Goal from "../model/goalModel.js";

export const setGoal = asynHandler(async (req, res) => {

    const text = req.body.text;
    if(!text){
        res.status(400)
        throw new Error("Please Enter your goal ")
    }
    console.log(req.user._id)
  const goal = new Goal({text,user:req.user._id})
  await goal.save()
 
  res.status(200).json({
    goal
  });
});

export const getGoals = asynHandler(async (req, res) => {
  const goals = await Goal.findOne({user:req.user._id});
  res.status(200).json({
    status: true,
    data: goals,
  });
});

export const updateGoal = asynHandler(async (req, res) => {
    const goal = await Goal.findOne({_id:req.params.id,user:req.user._id});
    console.log(goal)
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
    const goal = await Goal.findOne({_id:req.params.id,user:req.user._id});

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
    const goal = await Goal.findOne({_id:req.params.id,user:req.user._id});

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
