import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import SearchBar from '../SearchBar';
import TopHeader from '../TopHeader';
import './style.scss';

type ParamsProps = { filter: string | undefined; sortOrder: string; sortBy: string; search: string };
type HeaderProps = {
  onAddMovieForm: () => void;
  isVisible: boolean;
  params: ParamsProps;
  setParams: Dispatch<SetStateAction<ParamsProps>>;
};

const Header = ({ onAddMovieForm, isVisible, params, setParams }: HeaderProps): ReactElement | null => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="header">
      <div className="content">
        <TopHeader onAddMovieForm={onAddMovieForm} />
        <SearchBar params={params} />
      </div>
    </div>
  );
};

export default Header;
