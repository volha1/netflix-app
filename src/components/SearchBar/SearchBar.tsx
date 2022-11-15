import React, { ReactElement } from 'react';
import './style.scss';

const SearchBar = (): ReactElement => {
  return (
    <div className="search-bar">
      <h1 className="title">Find your movie</h1>
      <input className="search-field" placeholder="What do you want to watch?" />
      <button type="button" className="search-btn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
