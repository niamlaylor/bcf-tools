import { useState } from 'react';

export default function useApplicationData() {

  const [state, setState] = useState({
    important: true,
  });

  const setIsImportant = important => setState({ ...state, important });

  const handleImportant = () => {
    setIsImportant(!state.important);
  };

  return {
    state,
    handleImportant,
  };

}