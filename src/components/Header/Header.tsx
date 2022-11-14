import React, { ReactElement } from 'react';
import SearchBar from '../SearchBar';
import TopHeader from '../TopHeader';
import './style.scss';

type HeaderProps = {
  handleAddMovieForm: () => void;
  isVisible: boolean;
};

const Header = ({ handleAddMovieForm, isVisible }: HeaderProps): ReactElement | null => {
  return isVisible ? (
    <div className="header">
      <div className="content">
        <TopHeader handleMovieForm={handleAddMovieForm} />
        <SearchBar />
      </div>
    </div>
  ) : null;
};

export default Header;
