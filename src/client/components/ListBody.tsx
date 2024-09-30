
import React from 'react';
import '../styles/ListBody.css';
import { Goal } from '../types/types.ts'

interface ListBodyProps {
  goals: Goal[];
  toggleGoalCompletion: (id: number) => void;
}

const ListBody: React.FC<ListBodyProps> = ({goals, toggleGoalCompletion}) => {
  return (

    <ul className="goal-list">
      {goals.map(goal => (
        <li key={goal.id} className={goal.completed ? 'completed' : ''}>
          <span onClick={() => toggleGoalCompletion(goal.id)}>{goal.text}</span>
        </li>
      ))}
    </ul>


  );
}

export default ListBody;