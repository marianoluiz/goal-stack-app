// src/client/components/ListHeader.tsx
import React from 'react';
import '../styles/ListHeader.css';

const ListHeader: React.FC<{ 
  goalText: string; 
  setGoalText: (text: string) => void; 
  addGoal: () => void;
}> = ({ goalText, setGoalText, addGoal }) => {
  return (
    <>
      <h1 className="app-title">GoalStack App</h1>
      <p className="app-desc">Track your goals, gain insights.</p>
      <div className="goal-input">
        <input
          type="text"
          value={goalText}
          onChange={(e) => setGoalText(e.target.value)}
          placeholder="Enter your goal"
        />
        <button onClick={addGoal}>Add Goal</button>
      </div>
    </>
  );
};

export default ListHeader;