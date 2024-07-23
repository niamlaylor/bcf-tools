import { useState } from 'react';

export default function useApplicationData() {

  const [state, setState] = useState({
    important: true,
  });

  const setIsImportant = important => setState({ ...state, important });

  const handleImportant = () => {
    setIsImportant(true);
  };
  const handleInformational = () => {
    setIsImportant(false);
  };

  return {
    state,
    handleImportant,
    handleInformational,
  };

}