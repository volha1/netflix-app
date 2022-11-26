import React, { ReactElement, useState, useCallback } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { sortMovies, setSort } from '../../store/moviesSlice';
import './style.scss';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const GenreFilter = (): ReactElement => {
  const [genre, setGenre] = useState(genres[0]);
  const dispatch = useDispatch();

  const handleClick = useCallback((event) => {
    setGenre(event.target.text);
    const genreToStore = event.target.text === genres[0] ? undefined : event.target.text;
    dispatch(setSort({ filter: genreToStore }));
    dispatch(sortMovies({}));
  }, []);

  return (
    <ul className="genres-list" onClick={handleClick}>
      {genres.map((item) => {
        return (
          <li key={item}>
            <a href="#" className={classNames({ active: genre === item })}>
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default GenreFilter;
