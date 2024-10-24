// src/client/hooks/GoalsContext.tsx
import React, { createContext, useContext } from 'react';
import { Goal } from '../types/types';
import useGoals from './useGoals';

interface GoalsContextProps {
  goals: Goal[];
  goalInputText: string;
  setGoalInputText: (text: string) => void;
  addGoal: () => Promise<void>;
  deleteGoal: (goalId: string) => Promise<void>;
  updateGoal: (goalId: string, description: string) => Promise<void>;
  toggleGoalCompletion: (goalId: string) => Promise<void>;  
}

// Create the Goals context
const GoalsContext = createContext<GoalsContextProps | undefined>(undefined);
//GoalsContext is created using createContext. Initially, it is undefined, meaning there's no data provided yet. The context will later be populated by GoalsProvider.


// Create the GoalsProvider component
export const GoalsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const goalsHook = useGoals(); // Use your custom hook

  return (
    <GoalsContext.Provider value={goalsHook}>
      {children}
    </GoalsContext.Provider>
  );
};
// This is a context provider component that wraps around any part of your app that needs access to goals.

// The GoalsContext.Provider supplies the value from useGoals() to any child components that consume the context.

// The {children} allows any child components wrapped by GoalsProvider to have access to the goals-related logic.



// Create a custom hook to use the Goals context
export const useGoalsContext = (): GoalsContextProps => {
  const context = useContext(GoalsContext);
  if (!context) {
    throw new Error('useGoalsContext must be used within a GoalsProvider');
  }
  return context;
};

// This hook (useGoalsContext) simplifies access to the GoalsContext. Instead of calling useContext(GoalsContext) directly, you can just call useGoalsContext() in your components.

// Error handling: If you try to use this hook outside of the GoalsProvider, it throws an error to prevent you from accessing an undefined context.