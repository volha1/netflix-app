import React, { ReactElement, Dispatch, SetStateAction, useCallback } from 'react';
import classNames from 'classnames';
import './style.scss';

type ParamsProps = { filter: string | undefined; sortOrder: string; sortBy: string; search: string };
type GenreFilterProps = {
  onFilter: Dispatch<SetStateAction<ParamsProps>>;
  params: ParamsProps;
  genres: string[];
};

const GenreFilter = ({ onFilter, params, genres }: GenreFilterProps): ReactElement => {
  const genreParam = params.get('filter') || genres[0];
  const handleClick = useCallback(
    (event) => {
      const genreParam: string = event.target.text === genres[0] ? undefined : event.target.text;
      const next = {
        ...[...params.entries()].reduce((o, [key, value]) => ({ ...o, [key]: value }), {}),
        filter: genreParam,
      };
      onFilter(next);
    },
    [params.get('sortOrder'), params.get('sortBy'), params.get('filter')]
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
