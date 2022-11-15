import React, { ReactElement } from 'react';
import SearchBar from '../SearchBar';
import TopHeader from '../TopHeader';
import './style.scss';

type HeaderProps = {
  handleAddMovieForm: () => void;
};

const Header = ({ handleAddMovieForm }: HeaderProps): ReactElement => {
  return (
    <div className="header">
      <div className="content">
        <TopHeader handleMovieForm={handleAddMovieForm} />
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
