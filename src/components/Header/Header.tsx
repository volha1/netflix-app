import React, { ReactElement } from 'react';
import SearchBar from '../SearchBar';
import TopHeader from '../TopHeader';
import './style.scss';

type HeaderProps = {
  handleAddMovieForm: () => void;
  visible: boolean;
};

const Header = ({ handleAddMovieForm, visible }: HeaderProps): ReactElement | null => {
  return visible ? (
    <div className="header">
      <div className="content">
        <TopHeader handleMovieForm={handleAddMovieForm} />
        <SearchBar />
      </div>
    </div>
  ) : null;
};

export default Header;
