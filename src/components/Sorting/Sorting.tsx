import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import './style.scss';

type SortingProps = {
  onSort: Dispatch<SetStateAction<string>>;
};

const Sorting = ({ onSort }: SortingProps): ReactElement => {
  return (
    <div className="sorting">
      <label htmlFor="params" className="sorting-label">
        Sort by
      </label>
      <select
        name="params"
        id="params"
        defaultValue="default"
        onChange={(event): void => {
          return onSort(event.target.value);
        }}
      >
        <option disabled value="default">
          Choose here...
        </option>
        <option value="title">Title</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
};

export default Sorting;
