// src/client/services/goalService.ts
import { Goal } from "../types/types";

const API_HOST = import.meta.env.VITE_API_HOST;
const API_PORT = import.meta.env.VITE_API_PORT;
const API_BASE_URL = `http://${API_HOST}:${API_PORT}`;
const API_URL = `${API_BASE_URL}/api/goals`;

export const fetchGoals = async (): Promise<Goal[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch goals");

  return response.json();
};

export const addGoal = async (description: string): Promise<Goal> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description }),
  });
  
  if (!response.ok) throw new Error("Failed to add goal");
  
  return response.json();
};

export const deleteGoal = async (goalId: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${goalId}`, {
    method: "DELETE"
  });

  if (!response.ok) throw new Error("Failed to delete goal");
};

export const updateGoal = async (
  goalId: string,
  description: string
): Promise<void> => {
  const response = await fetch(`${API_URL}/${goalId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ description }),
  });
  if (!response.ok) throw new Error("Failed to update goal");
};

export const toggleGoalCompletion = async (goalId: string): Promise<void> => {
  const response = await fetch(`${API_URL}/${goalId}`, { method: "PATCH" });
  if (!response.ok) throw new Error("Failed to toggle goal completion");
};
