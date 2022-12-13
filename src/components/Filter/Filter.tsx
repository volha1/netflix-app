import React, { ReactElement, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GenreFilter from '../GenreFilter';
import Sorting from '../Sorting';
import { getAllMoviesSorted } from '../../store/moviesSlice';
import { genres } from '../../helpers/constants';
import './style.scss';

const genreValues = ['All', ...genres];

const Filter = (): ReactElement => {
  const [params, setParams] = useState({ filter: undefined, sortOrder: '', sortBy: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMoviesSorted(params));
  }, [params.filter, params.sortOrder]);

  return (
    <div className="filter content">
      <GenreFilter params={params} onFilter={setParams} genres={genreValues} />
      <Sorting params={params} onSort={setParams} />
    </div>
  );
};

export default Filter;
