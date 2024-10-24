// src/client/components/views/GoalItem.tsx
import React from 'react';
import { Goal } from "../../types/types";
import useEditText from "../../hooks/useEditText"; // import hook to use it

interface GoalItemProps {
  goal: Goal;
  deleteGoal: (goal_id: string) => void;
  updateGoal: (goal_id: string, description: string) => void;
  toggleGoalCompletion: (goal_id: string) => void;
}

const GoalItem: React.FC<GoalItemProps> = ( { goal, deleteGoal, toggleGoalCompletion, updateGoal } ) => {
// i need the  { } in the paramter object or else error

  const { editedText, isEditing, setEditedText, setIsEditing, handleSave, handleInputChange, handleKeyPress } = useEditText(); 

  // isEditing and editedText  is local to each GoalItem component instance, setting it to one goal_id inside one GoalItem doesn’t affect other instances. That means if you click on another goal’s edit button, the previous goal remains editable because it’s not being updated globally.

  return (
      <div
        key={goal.goal_id}
        className={`goal-list__item ${goal.is_completed ? 'goal-list__item--completed' : ''}`}
      >

        {isEditing === goal.goal_id ? (
          <input
            type="text"
            className="goal-list__input"
            value={editedText}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, goal.goal_id, updateGoal)}
            autoFocus
          />
        ) : (
          <span className="goal-list__text">{goal.description}</span>
        )}
        {/* checkbox */}
        <input
          type="checkbox"
          className="checkbox"
          checked={goal.is_completed}
          onChange={() => toggleGoalCompletion(goal.goal_id)}
        />

        {/* Edit button */}
        <a>
          <svg
            className="edit-button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(0,0,0,1)"
            width="1.5rem"
            height="1.5rem"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (isEditing === goal.goal_id) {
                // if its id im editing... i turn the goal from input to span
                handleSave(goal.goal_id, updateGoal);
                setIsEditing(null);
                console.log('gone to if')
              } else {
                // if its null... it turns the goal from span to input
                // if its other id... it goes to if
                setEditedText(goal.description);
                setIsEditing(goal.goal_id);
              }
            }}
            
            /* im had issue here that even if it isnt equal to the one im editing... it still goes to the if block and saves the editing... even if isEditing null... it still saves ... i realize that each state is local to each goal... since this component is mapped*/
          >
            <path d="M4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM12.0049 9.00275V6.00275L17.0049 11.0027H8.00488V9.00275H12.0049ZM7.00488 13.0027H16.0049V15.0027H12.0049V18.0027L7.00488 13.0027Z"></path>
          </svg>
        </a>

        {/* Delete button */}
        <a>
          <svg
            className="goal-list__button"
            onClick={() => deleteGoal(goal.goal_id)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="rgba(0,0,0,1)"
            width="1.5rem"
            height="1.5rem"
          >
            <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
          </svg>
        </a>
      </div>
  );
};

export default GoalItem;
