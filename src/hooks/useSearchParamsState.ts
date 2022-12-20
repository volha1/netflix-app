import { useSearchParams } from 'react-router-dom';

const useSearchParamsState = (): readonly [
  searchParamsState: string,
  setSearchParamsState: (newState: string) => void
] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setSearchParamsState = (field: string, value: string) => {
    const next = {
      ...[...searchParams.entries()].reduce((o, [key, value]) => ({ ...o, [key]: value }), {}),
      [filed]: value,
    };
    setSearchParams(next);
  };
  return [searchParamsState, setSearchParamsState];
};

export default useSearchParamsState;
