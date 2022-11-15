import { useCallback, useState } from 'react';

const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    setState((prevState) => {
      return !prevState;
    });
  }, []);

  return [state, toggle];
};

export default useToggle;
