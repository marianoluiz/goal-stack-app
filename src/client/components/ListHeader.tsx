// src/client/components/ListHeader.tsx
import React from 'react';
import '../styles/ListHeader.css';
import { Goal } from '../types/types.tsx'

const ListHeader: React.FC<{ 
  goalText: string; 
  setGoalText: (text: string) => void; 
  addGoal: () => void;
  goals: Goal[];
}> = ({ goalText, setGoalText, addGoal, goals}) => {

  let goalsCompletedCount = goals.filter((goal) => ( goal.completed === true));

  return (
    <>
    <div className='insights-div'>
      <div>
        <h1 className="app-title">GoalStack App</h1>
        <p className="app-desc">Track your goals, gain insights.</p>
      </div>
      <div>
        <span className='goal-count-div'>{goalsCompletedCount.length}/{goals.length}</span>
      </div>
    </div>


      <div className="goal-input">
        <input
          type="text"
          value={goalText}
          onChange={(e) => setGoalText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addGoal();
          }}
          placeholder="Enter your goal"
        />
        <button onClick={addGoal}>Add Goal</button>
      </div>
    </>
  );
};

export default ListHeader;