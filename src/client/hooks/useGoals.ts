// src/client/hooks/useGoals.ts
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { Goal } from '../types/types';

const useGoals = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [goalText, setGoalText] = useState('');

  // Load goals from local storage
  useEffect(() => {
    const storedGoals = localStorage.getItem('goals');
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);
  
  // Save goals to local storage
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  // Add a new goal
  const addGoal = () => {
    if (goalText.trim() === '') return;

    const newGoal: Goal = {
      id: uuidv4(),
      text: goalText,
      completed: false,
    };

    setGoals([...goals, newGoal]);
    setGoalText('');
  };

  // Delete a goal
  const deleteGoal = (id: string) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  // Update a goal
  const updateGoal = (id: string, updatedText: string) => {
    setGoals(goals.map((goal) => (goal.id === id ? { ...goal, text: updatedText } : goal)));
  };

  // Toggle goal completion
  const toggleGoalCompletion = (id: string) => {
    setGoals(goals.map((goal) => (goal.id === id ? { ...goal, completed: !goal.completed } : goal)));
  };

  return {
    goals,
    goalText,
    setGoalText,
    addGoal,
    deleteGoal,
    updateGoal,
    toggleGoalCompletion,
  };
};

export default useGoals;