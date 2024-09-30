// src/hooks/useGoals.ts
import { useState, useEffect } from 'react'
import { Goal } from '../types/types.ts'

const useGoals = () => {

  const [goals, setGoals] = useState<Goal[]>([])
  const [goalText, setGoalText] = useState('')

  // get goals from local storage; will only run once after component is mounted.
  useEffect(() => {
    const storedGoals = localStorage.getItem('goals')
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals))
    }
  }, [])

  // save goals to local storage whenever goals change.
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals))
  }, [goals])

  // add a new goal to the list of goals.
  const addGoal = () => {
    if (goalText.trim() === '') return;
    const newGoal: Goal = {
      id: Date.now(),
      text: goalText,
      completed: false,
    }
    setGoals([...goals, newGoal])
    setGoalText('')
  }

  // toggle the completion status of a goal.
  const toggleGoalCompletion = (id: number) => {
    setGoals(
      goals.map(
        (goal) => goal.id === id ?
        { ...goal, completed: !goal.completed } : goal
        // ...goal syntax is using the spread operator to copy all properties of the goal object into a new object.
      )
    )
  }

  return {
    goals,
    goalText,
    setGoalText,
    addGoal,
    toggleGoalCompletion,
  }
}

export default useGoals