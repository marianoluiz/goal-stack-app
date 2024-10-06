// src/client/App.tsx
import useGoals from './hooks/useGoals';
import './styles/App.css';
import ListHeader from './components/ListHeader';
import ListBody from './components/ListBody';

function App() {
  const { goals, goalText, setGoalText, addGoal, deleteGoal, updateGoal, toggleGoalCompletion } = useGoals();

  return (
    <div className="app">
      <ListHeader
        goals={goals}
        goalText={goalText}
        setGoalText={setGoalText}
        addGoal={addGoal} />
      <ListBody
        goals={goals}
        toggleGoalCompletion={toggleGoalCompletion}
        deleteGoal={deleteGoal}
        updateGoal={updateGoal}
      />
    </div>
  );
}

export default App;