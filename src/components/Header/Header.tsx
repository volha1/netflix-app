import React, { ReactElement } from 'react';
import SearchBar from '../SearchBar';
import TopHeader from '../TopHeader';
import './style.scss';

type HeaderProps = {
  onAddMovieForm: () => void;
  isVisible: boolean;
};

const Header = ({ onAddMovieForm, isVisible }: HeaderProps): ReactElement | null => {
  return isVisible ? (
    <div className="header">
      <div className="content">
        <TopHeader onAddMovieForm={onAddMovieForm} />
        <SearchBar />
      </div>
    </div>
  ) : null;
};

export default Header;
