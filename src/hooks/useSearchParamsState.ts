/* eslint-disable arrow-body-style */
import { useSearchParams } from 'react-router-dom';

const useSearchParamsState = (): readonly [
  searchParamsState: string,
  setSearchParamsState: (newState) => void,
  removeQueryParams: (paramName) => void
] => {
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

  const removeQueryParams = (paramName): void => {
    const param = searchParams.get(paramName);

    if (param) {
      searchParams.delete(paramName);

      setSearchParams(searchParams);
    }
  };

  return [searchParamsObject, setSearchParamsState, removeQueryParams];
};

export default useSearchParamsState;
