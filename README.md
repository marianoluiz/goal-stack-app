# GoalStack App

This is a goal tracking app that lets you track your goals and gain insights.

## Project Structure

- `App.tsx` - Root component that renders the `HomePage` component.
- `GoalsContext.tsx` - Context provider for managing goals state.
- `useGoals.ts` - Custom hook used in `GoalsContext.tsx` to manage goals.
- `useEditText.ts` - Custom hook for managing text editing state.
- `server/` - Contains the backend server code.

### Components

- `ListHeader.tsx` - Component that contains the title, input field, and add button for goals.
- `GoalList.tsx` - Component that contains the goal list UI.
- `GoalItem.tsx` - Component that represents a single goal item.

## Flow of the App

1. **App Initialization**: The app starts by rendering the `App` component, which is the root component of the application.
2. **State Management**: The `GoalsContext` provider manages the state of the goals. This context handles fetching, adding, updating, and deleting goals, as well as persisting them in `localStorage`.
3. **Rendering Components**: The `App` component renders the `HomePage` component, which in turn renders the `ListHeader` and `GoalList` components.
   - `ListHeader` is responsible for displaying the app title, description, and the input field for adding new goals.
   - `GoalList` is responsible for displaying the list of goals and handling goal interactions such as editing, completing, and deleting.

## Component Details

### `App.tsx`

- **Description**: The root component of the application.
- **Responsibilities**:
  - Renders the `HomePage` component.

### `HomePage.tsx`

- **Description**: Component that contains the main layout of the app.
- **Responsibilities**:
  - Renders the `ListHeader` and `GoalList` components.

### `ListHeader.tsx`

- **Description**: Component that contains the title, description, input field, and add button for goals.
- **Responsibilities**:
  - Displays the app title and description.
  - Provides an input field for adding new goals.
  - Calls the `addGoal` function when the add button is clicked.

### `GoalList.tsx`

- **Description**: Component that contains the goal list UI.
- **Responsibilities**:
  - Displays the list of goals.
  - Handles goal interactions such as editing, completing, and deleting.

### `GoalItem.tsx`

- **Description**: Component that represents a single goal item.
- **Responsibilities**:
  - Displays the goal description.
  - Provides an input field for editing the goal.
  - Handles goal interactions such as editing, completing, and deleting.

### `GoalsContext.tsx`

- **Description**: Context provider for managing the state of goals.
- **Responsibilities**:
  - Manages the state of goals and goal input text.
  - Handles adding, deleting, updating, and toggling the completion of goals.
  - Persists goals in `localStorage`.

### `useGoals.ts`

- **Description**: Custom hook for managing the state of goals.
- **Responsibilities**:
  - Manages the state of goals and goal input text.
  - Handles adding, deleting, updating, and toggling the completion of goals.
  - Persists goals in `localStorage`.

### `useEditText.ts`

- **Description**: Custom hook for managing text editing state.
- **Responsibilities**:
  - Manages the state of the text being edited.
  - Handles input changes, key presses, and blur events.

## Backend

### `server.ts`

- **Description**: Entry point for the backend server.
- **Responsibilities**:
  - Sets up the Express server.
  - Configures middleware such as CORS and JSON body parsing.
  - Defines routes for goal-related operations.
  - Handles errors using a custom error handler middleware.
  - Starts the server on the specified port.