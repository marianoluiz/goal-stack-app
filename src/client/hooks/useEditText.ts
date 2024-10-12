// src/client/hooks/useEditText.ts
import { useState } from 'react';

const useEditText = () => {
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editedText, setEditedText] = useState<string>('');

  const handleSave = (
    id: string,
    updateGoal: (id: string, updatedText: string) => void,
  ) => {
    updateGoal(id, editedText);
    setIsEditing(null);
  };

  const handleInputChange = (newText: string) => {
    setEditedText(newText);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    id: string,
    updateGoal: (id: string, updatedText: string) => void,
  ) => {
    if (event.key === 'Enter') {
      handleSave(id, updateGoal);
    }
  };

  return {
    isEditing,
    editedText,
    setIsEditing,
    setEditedText,
    handleKeyPress,
    handleInputChange,
    handleSave,
  };
};

export default useEditText;
