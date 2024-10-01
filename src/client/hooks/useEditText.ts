// src/client/hooks/useEditText.ts
import { useState } from 'react';

const useEditText = () => {
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editedText, setEditedText] = useState<string>('');

  const handleSave = (id: number, updateGoal: (id: number, updatedText: string) => void) => {
    updateGoal(id, editedText);
    setIsEditing(null);
  };

  const handleBlur = (id: number, updateGoal: (id: number, updatedText: string) => void) => {
    handleSave(id, updateGoal);
  };

  const handleInputChange = (newText: string) => {
    setEditedText(newText);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, id: number, updateGoal: (id: number, updatedText: string) => void) => {
    if (event.key === 'Enter') {
      handleSave(id, updateGoal);
    }
  };

  return {
    isEditing,
    editedText,
    setIsEditing,
    setEditedText,
    handleBlur,
    handleKeyPress,
    handleInputChange,
  };
};

export default useEditText;