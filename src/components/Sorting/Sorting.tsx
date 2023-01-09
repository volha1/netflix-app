import React, { ReactElement, Dispatch, SetStateAction, useCallback } from 'react';
import SearchParams from '../../types/SearchParams';
import './style.scss';

const sortOptions = {
  release_date_asc: { sortBy: 'release_date', sortOrder: 'asc' },
  release_date_desc: { sortBy: 'release_date', sortOrder: 'desc' },
  vote_average_asc: { sortBy: 'vote_average', sortOrder: 'asc' },
  vote_average_desc: { sortBy: 'vote_average', sortOrder: 'desc' },
};

type SortProps = { sortOrder: string; sortBy: string };

const Sorting = ({ onSort, params }): ReactElement => {
  const handleSelect = useCallback(
    (event: { target: { value: string } }): void => {
      const sorting = event.target.value;
      onSort({ sortBy: sortOptions[sorting].sortBy, sortOrder: sortOptions[sorting].sortOrder });
    },
    [params]
  );

  return (
    <div className="sorting">
      <label htmlFor="params" className="sorting-label">
        Sort by
      </label>
      <select
        name="params"
        id="params"
        defaultValue="default"
        onChange={handleSelect}
        value={`${params.sortBy}_${params.sortOrder}`}
      >
        <option disabled value="default">
          Choose here...
        </option>
        <option value="release_date_asc">Release date (asc)</option>
        <option value="release_date_desc">Release date (desc)</option>
        <option value="vote_average_asc">Rating (asc)</option>
        <option value="vote_average_desc">Rating (desc)</option>
      </select>
    </div>
  );
};

export default Sorting;
