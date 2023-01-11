import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import SearchParams from '../../types/SearchParams';
import SearchBar from '../SearchBar';
import TopHeader from '../TopHeader';
import './style.scss';

type HeaderProps = {
  onAddMovieForm: () => void;
  isVisible: boolean;
  params: SearchParams;
  setParams: Dispatch<SetStateAction<SearchParams>>;
  removeSearchParams: Dispatch<SetStateAction<string>>;
};

const Header = ({
  onAddMovieForm,
  isVisible,
  params,
  setParams,
  removeSearchParams,
}: HeaderProps): ReactElement | null => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="header">
      <div className="content">
        <TopHeader onAddMovieForm={onAddMovieForm} />
        <SearchBar params={params} onSearch={setParams} removeSearchParams={removeSearchParams} />
      </div>
    </div>
  );
};

export default Header;
