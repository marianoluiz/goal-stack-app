// src/client/components/views/ListHeader.tsx
import React from "react";

import { useGoalsContext } from './../hooks/GoalsContext';
import './../styles/ListHeader.component.css';

const ListHeader: React.FC = () => {

    const {
    goalInputText
    ,setGoalInputText
    ,addGoal
    ,goals
  } = useGoalsContext();

  const goalsCompletedCount = goals.filter((goal) => goal.is_completed).length;

  return (
    <div >
      <div className="div-1st-row">
        <div>
          <h1 className="app-title">GoalStack App</h1>
          <p className="app-desc">Track your goals, gain insights.</p>
        </div>

        <div className="insights-div">
          <p>{goalsCompletedCount}/{goals.length}</p>
        </div>
      </div>


      <div className="goal-input">
        <input
          type="text"
          value={goalInputText}
          onChange={(e) => setGoalInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addGoal();
          }}
          placeholder="Enter your goal"
        />
        <button onClick={addGoal}>Add Goal</button>
      </div>
    </div>
  );
};

export default ListHeader;
