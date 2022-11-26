import React, { ReactElement, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { sortMovies, setSort } from '../../store/moviesSlice';
import './style.scss';

const sortOptions = {
  release_date_asc: { sortBy: 'release_date', sortOrder: 'asc' },
  release_date_desc: { sortBy: 'release_date', sortOrder: 'desc' },
  vote_average_asc: { sortBy: 'vote_average', sortOrder: 'asc' },
  vote_average_desc: { sortBy: 'vote_average', sortOrder: 'desc' },
};

const Sorting = (): ReactElement => {
  const dispatch = useDispatch();

  const handleSelect = useCallback((event): void => {
    dispatch(
      setSort({
        ...sortOptions[event.target.value],
      })
    );
    dispatch(sortMovies({}));
  }, []);

  return (
    <div className="sorting">
      <label htmlFor="params" className="sorting-label">
        Sort by
      </label>
      <select name="params" id="params" defaultValue="default" onChange={handleSelect}>
        <option disabled value="default">
          Choose here...
        </option>
        <option value="release_date_asc">Release date (asc)</option>
        <option value="release_date_desc">Release date (desc)</option>
        <option value="vote_average_asc">Rating (asc)</option>
        <option value="vote_average_desc">Rating (desc)</option>
      </select>
    </div>
  );
};

export default Sorting;
