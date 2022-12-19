import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import GenreFilter from '../GenreFilter';
import Sorting from '../Sorting';
import { genres } from '../../helpers/constants';
import './style.scss';

const genreValues = ['All', ...genres];

type ParamsProps = { filter: string | undefined; sortOrder: string; sortBy: string; search: string };
type FilterProps = {
  params: ParamsProps;
  setParams: Dispatch<SetStateAction<ParamsProps>>;
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
