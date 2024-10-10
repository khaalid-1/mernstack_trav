import asynHandler from "express-async-handler";
import Goal from "../model/goalModel.js";
export const setGoal = asynHandler(async (req, res) => {

    const text = req.body.text;
    if(!text){
        res.status(400)
        throw new Error("Please Enter your goal ")
    }
  const goals = await Goal.find();
  res.status(200).json({
    status: true,
    data: goals,
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
  res.status(200).json({
    status: true,
    messgae: `this route is working ${req.params.id}`,
  });
});

export const getGoal = asynHandler(async (req, res) => {
  res.status(200).json({
    status: true,
    messgae: `this route is working ${req.params.id}`,
  });
});

export const deleteGoal = asynHandler(async (req, res) => {
  res.status(200).json({
    status: true,
    messgae: `this route is working ${req.params.id}`,
  });
});
