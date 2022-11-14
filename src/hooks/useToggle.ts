import { useCallback } from 'react';

const useToggle = (state: boolean, setState: (state: boolean) => void): (() => void) => {
  const func = useCallback(() => {
    setState(!state);
  }, [state]);

  return func;
};

export default useToggle;
