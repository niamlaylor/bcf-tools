import { useState } from 'react';

export default function useApplicationData() {

  const [state, setState] = useState({
    important: true,
    fieldOneSelection: "Important",
  });

  const setIsImportant = important => setState({ ...state, important });
  const setFieldOneSelected = fieldOneSelection => setState( { ...state, fieldOneSelection })

  const handleImportant = () => {
    setIsImportant(!state.important);
  };

  const handleFieldOne = (selection) => {
    setFieldOneSelected(selection);
  };

  return {
    state,
    handleImportant,
    handleFieldOne,
  };

}