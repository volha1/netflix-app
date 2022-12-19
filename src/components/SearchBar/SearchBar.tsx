import React, { ReactElement } from 'react';
import './style.scss';

type ParamsProps = { filter: string | undefined; sortOrder: string; sortBy: string; search: string };
type SearchBarProps = {
  params: ParamsProps;
};

const SearchBar = ({ params }: SearchBarProps): ReactElement => {
  return (
    <div className="search-bar">
      <h1 className="title">Find your movie</h1>
      <input className="search-field" placeholder="What do you want to watch?" value={params.search} />
      <button type="button" className="search-btn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
