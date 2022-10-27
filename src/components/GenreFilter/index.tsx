import React from 'react';
import './style.scss';

const GenreFilter = () => {
  return (
    <ul className="genres-list">
      <li>
        <a href="#" className="active">
          All
        </a>
      </li>
      <li>
        <a href="#">Documentary</a>
      </li>
      <li>
        <a href="#">Comedy</a>
      </li>
      <li>
        <a href="#">Horror</a>
      </li>
      <li>
        <a href="#">Crime</a>
      </li>
    </ul>
  );
};

export default GenreFilter;
