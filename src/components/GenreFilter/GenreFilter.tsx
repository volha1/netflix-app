import React, { ReactElement, Dispatch, SetStateAction, useCallback } from 'react';
import classNames from 'classnames';
import './style.scss';
import SearchParams from '../../types/SearchParams';

type FilterProps = { filter: string | undefined };
type GenreFilterProps = {
  onFilter: Dispatch<SetStateAction<FilterProps>>;
  params: SearchParams;
  genres: string[];
  removeSearchParams: Dispatch<SetStateAction<string>>;
};

const GenreFilter = ({ onFilter, params, genres, removeSearchParams }: GenreFilterProps): ReactElement => {
  const genreParamSelected = params.filter || genres[0];
  const handleClick = useCallback(
    (event) => {
      if (event.target.text === genres[0]) {
        removeSearchParams('filter');
      } else {
        onFilter({ filter: event.target.text });
      }
    },
    [params]
  );

  return (
    <ul className="genres-list" onClick={handleClick}>
      {genres.map((item) => {
        return (
          <li key={item}>
            <a href="#" className={classNames({ active: genreParamSelected === item })}>
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default GenreFilter;
