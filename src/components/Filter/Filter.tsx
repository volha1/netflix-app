import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import GenreFilter from '../GenreFilter';
import Sorting from '../Sorting';
import { genres } from '../../helpers/constants';
import './style.scss';
import SearchParams from '../../types/SearchParams';

const genreValues = ['All', ...genres];

type FilterProps = {
  params: SearchParams;
  setParams: Dispatch<SetStateAction<SearchParams>>;
};

const Filter = ({ params, setParams }: FilterProps): ReactElement => {
  return (
    <div className="filter content">
      <GenreFilter params={params} onFilter={setParams} genres={genreValues} />
      <Sorting params={params} onSort={setParams} />
    </div>
  );
};

export default Filter;
