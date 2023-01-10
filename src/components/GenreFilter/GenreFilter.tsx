import React, { ReactElement, Dispatch, SetStateAction, useCallback } from 'react';
import classNames from 'classnames';
import './style.scss';
import SearchParams from '../../types/SearchParams';

type GenreFilterProps = {
  onFilter: Dispatch<SetStateAction<SearchParams>>;
  params: SearchParams;
  genres: string[];
  removeSearchParams: Dispatch<SetStateAction<string>>;
};

const GenreFilter = ({ onFilter, params, genres, removeSearchParams }: GenreFilterProps): ReactElement => {
  const genreParamSelected = params.filter || genres[0];
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (event.target && event.currentTarget.innerText === genres[0]) {
        removeSearchParams('filter');
      } else {
        onFilter({ ...params, filter: event.currentTarget.innerText.toLowerCase() });
      }
    },
    [params]
  );

  return (
    <ul className="genres-list">
      {genres.map((item) => {
        return (
          <button
            type="button"
            key={item}
            className={classNames({ active: genreParamSelected === item })}
            onClick={handleClick}
          >
            {item}
          </button>
        );
      })}
    </ul>
  );
};

export default GenreFilter;
