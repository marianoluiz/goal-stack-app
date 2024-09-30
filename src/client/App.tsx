import useGoals from './hooks/useGoals.ts'
import './styles/App.css'
import ListHeader from './components/ListHeader.tsx';
import ListBody from './components/ListBody.tsx';

function App() {

  const { goals, goalText,toggleGoalCompletion, setGoalText, addGoal } = useGoals()

  return (
    <div className="app">
      
      <ListHeader goalText={goalText} setGoalText={setGoalText} addGoal={addGoal}/>

      <ListBody goals={goals} toggleGoalCompletion={toggleGoalCompletion}/>
    </div>
  )
}

export default App