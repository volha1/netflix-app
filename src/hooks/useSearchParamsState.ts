/* eslint-disable arrow-body-style */
import { useSearchParams } from 'react-router-dom';

const useSearchParamsState = (): readonly [searchParamsState: string, setSearchParamsState: (newState) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsObject = {
    ...[...searchParams.entries()].reduce((o, [key, value]) => ({ ...o, [key]: value }), {}),
  };

  const setSearchParamsState = (object: { [key: string]: string }): void => {
    const next = {
      ...searchParamsObject,
      ...[...Object.entries(object)].reduce((o, [key, value]) => ({ ...o, [key]: value }), {}),
    };
    setSearchParams(next);
  };

  return [searchParamsObject, setSearchParamsState];
};

export default useSearchParamsState;
