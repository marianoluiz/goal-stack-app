import React from 'react';
import '../styles/ListBody.css';
import useEditText from '../hooks/useEditText';
import { Goal } from '../types/types';

interface ListBodyProps {
  goals: Goal[];
  toggleGoalCompletion: (id: number) => void;
  deleteGoal: (id: number) => void;
  updateGoal: (id: number, updatedText: string) => void;
}

const ListBody: React.FC<ListBodyProps> = ({ goals, toggleGoalCompletion, deleteGoal, updateGoal }) => {
  const {
    editedText,
    handleBlur,
    handleKeyPress,
    handleInputChange,
    isEditing,
    setIsEditing,
    setEditedText,
  } = useEditText();

  return (
    <ul className="goal-list">
      {goals.map((goal) => (
        <div key={goal.id} className={goal.completed ? 'completed' : ''}>
          {isEditing === goal.id ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, goal.id, updateGoal)}
              onBlur={() => handleBlur(goal.id, updateGoal)}
              autoFocus
            />
          ) : (
            <span style={{ cursor: 'pointer' }} onClick={() => { setIsEditing(goal.id); setEditedText(goal.text); }}>
              {goal.text}
            </span>
          )}
          <input type="checkbox" checked={goal.completed} onChange={() => toggleGoalCompletion(goal.id)} />
          <button onClick={() => deleteGoal(goal.id)}>X</button>
        </div>
      ))}
    </ul>
  );
};

export default ListBody;