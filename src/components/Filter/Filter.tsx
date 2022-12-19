import React, { ReactElement, useEffect, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import GenreFilter from '../GenreFilter';
import Sorting from '../Sorting';
import { getAllMoviesSorted } from '../../store/moviesSlice';
import { genres } from '../../helpers/constants';
import './style.scss';

const genreValues = ['All', ...genres];

type ParamsProps = { filter: string | undefined; sortOrder: string; sortBy: string };
type FilterProps = {
  params: ParamsProps;
  setParams: Dispatch<SetStateAction<ParamsProps>>;
};

const Filter = ({ params, setParams }: FilterProps): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();

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
