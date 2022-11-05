import React, { ReactElement } from 'react';
import GenreFilter from '../GenreFilter';
import Sorting from '../Sorting';
import './style.scss';

type FilterProps = {
  setSort: () => void;
};

const Filter = ({ setSort }: FilterProps): ReactElement => (
  <div className="filter content">
    <GenreFilter />
    <Sorting setSort={setSort} />
  </div>
);

export default Filter;
