import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import GenreFilter from '../GenreFilter';
import Sorting from '../Sorting';
import './style.scss';

type FilterProps = {
  setSort: Dispatch<SetStateAction<string>>;
};

const Filter = ({ setSort }: FilterProps): ReactElement => {
  return (
    <div className="filter content">
      <GenreFilter />
      <Sorting setSort={setSort} />
    </div>
  );
};

export default Filter;
