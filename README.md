# GoalStack App
This is a goal tracking app that lets you track your goals and gain insights.

## Project Structure
- `App.tsx` - parent of components, passed props to components ListBody.tsx and ListHeader.tsx.
- `useGoals.ts` - Hooks in the App.tsx file.
  - localStorage is being used by useGoals.ts to store the goals.

### Components
- `ListHeader.ts` - component that contains title, input field, add button of goal.
- `listBody.ts` - component that contains goal list UI.
