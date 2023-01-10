/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, Dispatch, SetStateAction, useCallback, useState } from 'react';
import SearchParams from '../../types/SearchParams';
import './style.scss';

type SearchBarProps = {
  onSearch: Dispatch<SetStateAction<SearchParams>>;
  params: SearchParams;
  removeSearchParams: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ params, onSearch, removeSearchParams }: SearchBarProps): ReactElement => {
  const [search, setSearch] = useState(params.search);

  const handleChange = useCallback(
    (event: any) => {
      if (!event.target.value.trim()) {
        removeSearchParams('search');
        removeSearchParams('searchBy');
      }
      setSearch(event.target.value);
    },
    [search]
  );

  const handleClick = useCallback(() => {
    onSearch({ ...params, search, searchBy: 'title' });
  }, [params, search]);

  return (
    <div className="search-bar">
      <h1 className="title">Find your movie</h1>
      <input className="search-field" placeholder="What do you want to watch?" value={search} onChange={handleChange} />
      <button type="button" className="search-btn" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
