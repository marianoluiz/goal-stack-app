// src/server/models/goalModel.ts

import pool from '../config/database.js';

export interface Goal {
  goalId: string;
  description: string;
  isCompleted: boolean;
  startDate: Date;
  endDate?: Date | null;
}

export const getGoals = async (): Promise<Goal[]> => {
  const [rows] = await pool.query('SELECT * FROM goals');
  return rows as Goal[];
}

export const addGoal = async (goal: Goal): Promise<void> => {
  await pool.query('INSERT INTO goals (goal_id, description, is_completed, start_date, end_date) VALUES (?, ?, ?, ?, ?)', 
    [      
      goal.goalId,
      goal.description,
      goal.isCompleted,
      goal.startDate,
      goal.endDate
    ]
  )
}

export const deleteGoal = async (goalId: string): Promise<void> => {
  await pool.query('DELETE FROM goals WHERE goal_id = ?', [goalId]);
}

export const updateGoal = async (goalId: String, description: string): Promise<void> => {
  await pool.query('UPDATE goals SET description = ? WHERE goal_id = ?',     [description, goalId]);
}

export const toggleGoalCompletion = async(goalId: string): Promise<void> => {
  await pool.query('UPDATE  goals SET isCompleted = NOT WHERE goalId  = ?', [goalId])
}



