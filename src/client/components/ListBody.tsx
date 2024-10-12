import '../styles/ListBody.css';
import useEditText from '../hooks/useEditText';
import { Goal } from '../types/types';

const ListBody: React.FC<{
  goals: Goal[];
  toggleGoalCompletion: (id: string) => void;
  deleteGoal: (id: string) => void;
  updateGoal: (id: string, updatedText: string) => void;
}> = ({ goals, toggleGoalCompletion, deleteGoal, updateGoal }) => {
  const {
    editedText,
    handleKeyPress,
    handleInputChange,
    isEditing,
    setIsEditing,
    setEditedText,
    handleSave,
  } = useEditText();

  return (
    <ul className="goal-list">
      {goals.map((goal) => (
        <div
          key={goal.id}
          className={`goal-list__item ${goal.completed ? 'goal-list__item--completed' : ''}`}
        >
          {isEditing === goal.id ? (
            <input
              type="text"
              className="goal-list__input"
              value={editedText}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, goal.id, updateGoal)}
              autoFocus
            />
          ) : (
            <span className="goal-list__text">{goal.text}</span>
          )}
          {/* checkbox */}
          <input
            type="checkbox"
            className="checkbox"
            checked={goal.completed}
            onChange={() => toggleGoalCompletion(goal.id)}
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
                if (isEditing === goal.id) {
                  handleSave(goal.id, updateGoal);
                  setIsEditing(null);
                } else {
                  setEditedText(goal.text);
                  setIsEditing(goal.id);
                }
              }}
            >
              <path d="M4.00488 5.00275V19.0027H20.0049V5.00275H4.00488ZM3.00488 3.00275H21.0049C21.5572 3.00275 22.0049 3.45046 22.0049 4.00275V20.0027C22.0049 20.555 21.5572 21.0027 21.0049 21.0027H3.00488C2.4526 21.0027 2.00488 20.555 2.00488 20.0027V4.00275C2.00488 3.45046 2.4526 3.00275 3.00488 3.00275ZM12.0049 9.00275V6.00275L17.0049 11.0027H8.00488V9.00275H12.0049ZM7.00488 13.0027H16.0049V15.0027H12.0049V18.0027L7.00488 13.0027Z"></path>
            </svg>
          </a>

          {/* Delete button */}
          <a>
            <svg
              className="goal-list__button"
              onClick={() => deleteGoal(goal.id)}
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
      ))}
    </ul>
  );
};

export default ListBody;
