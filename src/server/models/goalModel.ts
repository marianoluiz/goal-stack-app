// src/server/models/goalModel.ts

import pool from '../config/database.js';

export interface Goal {
  goal_id: string;
  description: string;
  is_completed: boolean;
}

export const getGoals = async (): Promise<Goal[]> => {
  const [rows] = await pool.query('SELECT * FROM goals');
  return rows as Goal[]; // returns an array of goal objects
}

export const addGoal = async (goal: Goal): Promise<void> => {
  await pool.query('INSERT INTO goals (goal_id, description, is_completed) VALUES (?, ?, ?)', 
    [      
      goal.goal_id,
      goal.description,
      goal.is_completed ? true : false
    ]
  )
}

export const deleteGoal = async (goalId: string): Promise<void> => {
  await pool.query('DELETE  FROM  goals WHERE goal_id = ?', [goalId]);
}

export const updateGoal = async (goalId: String, description: string): Promise<void> => {
  await pool.query('UPDATE  goals SET description = ? WHERE goal_id = ?', [description, goalId]);
}

export const toggleGoalCompletion = async(goalId: string): Promise<void> => {
  await pool.query('UPDATE  goals SET is_completed = NOT is_completed WHERE goal_id  = ?', [goalId])
}