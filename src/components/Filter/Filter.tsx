import React, { ReactElement } from 'react';
import GenreFilter from '../GenreFilter';
import Sorting from '../Sorting';
import './style.scss';

const Filter = (): ReactElement => {
  return (
    <div className="filter content">
      <GenreFilter />
      <Sorting />
    </div>
  );
};

export default Filter;
