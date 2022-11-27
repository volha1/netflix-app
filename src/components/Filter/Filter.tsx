import React, { ReactElement, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import GenreFilter from '../GenreFilter';
import Sorting from '../Sorting';
import { sortMovies } from '../../store/moviesSlice';
import './style.scss';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const Filter = (): ReactElement => {
  const [params, setParams] = useState({ filter: genres[0], sortOrder: '', sortBy: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortMovies(params));
  }, [params.filter, params.sortOrder]);

  return (
    <div className="filter content">
      <GenreFilter params={params} onFilter={setParams} genres={genres} />
      <Sorting params={params} onSort={setParams} />
    </div>
  );
};

export default Filter;
