import React, { ReactElement } from 'react';
import './style.scss';

const Sorting = (): ReactElement => {
  return (
    <div className="sorting">
      <label htmlFor="params" className="sorting-label">
        Sort by
      </label>
      <select name="parameters" id="params">
        <option value="release-date">Release date</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default Sorting;
