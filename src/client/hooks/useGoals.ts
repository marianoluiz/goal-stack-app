// src/client/hooks/useGoals.ts
import { useState, useEffect } from 'react';
import { Goal } from '../types/types';

const useGoals = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [goalText, setGoalText] = useState('');

  useEffect(() => {
    const storedGoals = localStorage.getItem('goals');
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = () => {
    if (goalText.trim() === '') return;

    const newGoal: Goal = {
      id: Date.now(),
      text: goalText,
      completed: false,
    };

    setGoals([...goals, newGoal]);
    setGoalText('');
  };

  const deleteGoal = (id: number) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const updateGoal = (id: number, updatedText: string) => {
    setGoals(goals.map((goal) => (goal.id === id ? { ...goal, text: updatedText } : goal)));
  };

  const toggleGoalCompletion = (id: number) => {
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