// src/client/hooks/useGoals.ts
import { useState, useEffect } from "react";
import { Goal } from "../types/types";
import * as goalService from "../services/goalService";

const useGoals = () => {

  const [goals, setGoals] = useState<Goal[]>([]);
  
  // goalInputText is the input field text when u add goals
  const [goalInputText, setGoalInputText] = useState("");

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const data = await goalService.fetchGoals();
        setGoals(data);
      } catch (error) {
        console.error("Failed to fetch goals", error);
      }
    };
    fetchGoals();
  }, []);

  const addGoal = async () => {
    try {
      if (goalInputText.trim() === "") return;

      const newGoal = await goalService.addGoal(goalInputText);

      // Schedule state update
      setGoals((prevGoals) => [...prevGoals, newGoal]);

      // Clear the input field
      setGoalInputText("");
  
    } catch (error) {
      console.error("Failed to add goal", error);
    }
  };

  const deleteGoal = async (goal_id: string) => {
    try {
      await goalService.deleteGoal(goal_id);
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.goal_id !== goal_id));
    } catch (error) {
      console.error("Failed to delete goal", error);
    }
  };

  const updateGoal = async (goal_id: string, description: string) => {
    try {
      await goalService.updateGoal(goal_id, description);
      
      setGoals((prevGoals) =>
        prevGoals.map((goal) =>
          goal.goal_id === goal_id ? { ...goal, description } : goal
        )
      );
    } catch (error) {
      console.error("Failed to update goal", error);
    }
  };

  const toggleGoalCompletion = async (goal_id: string) => {
    try {
      await goalService.toggleGoalCompletion(goal_id);
      setGoals((prevGoals) =>
        prevGoals.map((goal) =>
          goal.goal_id === goal_id ? { ...goal, is_completed: !goal.is_completed } : goal
        )
      );

    } catch (error) {
      console.error("Failed to toggle goal completion", error);
    }
  };



  return {
    goals,
    goalInputText,
    setGoalInputText,
    addGoal,
    deleteGoal,
    updateGoal,
    toggleGoalCompletion,
  };
};

export default useGoals;
