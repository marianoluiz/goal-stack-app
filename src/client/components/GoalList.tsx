// src/client/components/views/GoalList.tsx
import React from "react";
import GoalItem from "./GoalList/GoalItem";
import { Goal } from '../types/types'; // Ensure this matches your Goal definition
import { useGoalsContext } from './../hooks/GoalsContext';
import './../styles/ListBody.component.css';

const GoalList: React.FC = () => {
  const { goals, updateGoal, deleteGoal, toggleGoalCompletion } = useGoalsContext();

  return (
    <div className="goal-list">
      {goals.map((goal: Goal) => {
          return (
          <GoalItem
              key={goal.goal_id} // Ensure this matches your Goal's unique identifier
              goal={goal}
              deleteGoal={deleteGoal}
              toggleGoalCompletion={toggleGoalCompletion}
              updateGoal={updateGoal}
            /> 
          
        )

      })}
    </div>
  );
};

export default GoalList;