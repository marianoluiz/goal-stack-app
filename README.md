# GoalStack App

This is a goal tracking app that lets you track your goals and gain insights.

## Project Structure

- `App.tsx` - Parent component that passes props to components `ListBody.tsx` and `ListHeader.tsx`.
- `useGoals.ts` - Custom hook used in `App.tsx` to manage goals.
  - Uses `localStorage` to store the goals.

### Components

- `ListHeader.tsx` - Component that contains the title, input field, and add button for goals.
- `ListBody.tsx` - Component that contains the goal list UI.

## Flow of the App

1. **App Initialization**: The app starts by rendering the `App` component, which is the root component of the application.
2. **State Management**: The `App` component uses the `useGoals` hook to manage the state of the goals. This hook handles fetching, adding, updating, and deleting goals, as well as persisting them in `localStorage`.
3. **Rendering Components**: The `App` component renders two child components: `ListHeader` and `ListBody`.
   - `ListHeader` is responsible for displaying the app title, description, and the input field for adding new goals.
   - `ListBody` is responsible for displaying the list of goals and handling goal interactions such as editing, completing, and deleting.

## Component Details

### `App.tsx`

- **Description**: The root component of the application.
- **Responsibilities**:
  - Manages the state of the goals using the `useGoals` hook.
  - Renders the `ListHeader` and `ListBody` components.

### `ListHeader.tsx`

- **Description**: Component that contains the title, description, input field, and add button for goals.
- **Responsibilities**:
  - Displays the app title and description.
  - Provides an input field for adding new goals.
  - Calls the `addGoal` function when the add button is clicked.

### `ListBody.tsx`

- **Description**: Component that contains the goal list UI.
- **Responsibilities**:
  - Displays the list of goals.
  - Handles goal interactions such as editing, completing, and deleting.

### `useGoals.ts`

- **Description**: Custom hook for managing the state of goals.
- **Responsibilities**:
  - Manages the state of goals and goal text.
  - Handles adding, deleting, updating, and toggling the completion of goals.
  - Persists goals in `localStorage`.

### `useEditText.ts`

- **Description**: Custom hook for managing text editing state.
- **Responsibilities**:
  - Manages the state of the text being edited.
  - Handles input changes, key presses, and blur events.
