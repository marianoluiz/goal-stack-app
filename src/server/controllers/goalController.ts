// src/server/controllers/goalController.ts

import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as goalModel from '../models/goalModel.js';

// i didnt define the data type of functions here, its not best practice, but its fun to shorten code

export const getGoals = async (_req: Request, res: Response) => {
  try {
    const goals = await goalModel.getGoals();
    res.json(goals);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to fetch goals' });
  }
};

export const addGoal = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const newGoal = { 
      goal_id: uuidv4()
      , description
      , is_completed: false
    };
    
    await goalModel.addGoal(newGoal);
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add goal'});
  }
};

export const deleteGoal = async (req: Request, res: Response) => {
  try {
    const { goalId } = req.params;
    await goalModel.deleteGoal(goalId);
    res.status(204).end();
    // no response
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete goal'});
  }
}

export const updateGoal = async (req: Request, res: Response) => {
  try {
    const { goalId } = req.params;
    const { description } = req.body;
    await goalModel.updateGoal(goalId, description)

    res.status(200).json({ goalId, description })
  } catch (error) {
    res.status(500).json({ error: 'Failed to update goal' });
  }
}

export const toggleGoalCompletion = async (req: Request, res: Response) => {
  try {
    const { goalId } = req.params;
    await goalModel.toggleGoalCompletion(goalId);

    res.status(200).json({ goalId })
  } catch {
    res.status(500).json({ error: 'Failed to toggle goal completion'})
  }
};