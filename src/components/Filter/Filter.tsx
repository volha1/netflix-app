import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import GenreFilter from '../GenreFilter';
import Sorting from '../Sorting';
import './style.scss';

type FilterProps = {
  onSort: Dispatch<SetStateAction<string>>;
};

const Filter = ({ onSort }: FilterProps): ReactElement => {
  return (
    <div className="filter content">
      <GenreFilter />
      <Sorting onSort={onSort} />
    </div>
  );
};

export default Filter;
