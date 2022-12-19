import React, { ReactElement, Dispatch, SetStateAction, useCallback } from 'react';
import classNames from 'classnames';
import './style.scss';

type ParamsProps = { filter: string | undefined; sortOrder: string; sortBy: string };
type GenreFilterProps = {
  onFilter: Dispatch<SetStateAction<ParamsProps>>;
  params: ParamsProps;
  genres: string[];
};

const GenreFilter = ({ onFilter, params, genres }: GenreFilterProps): ReactElement => {
  const genreParam = params.filter === undefined ? genres[0] : params.filter;
  const handleClick = useCallback(
    (event) => {
      const genreParam: string = event.target.text === genres[0] ? undefined : event.target.text;
      onFilter((prevState: ParamsProps) => {
        return { ...prevState, filter: genreParam };
      });
    },
    [params.filter]
  );

  return (
    <ul className="genres-list" onClick={handleClick}>
      {genres.map((item) => {
        return (
          <li key={item}>
            <a href="#" className={classNames({ active: genreParam === item })}>
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default GenreFilter;
