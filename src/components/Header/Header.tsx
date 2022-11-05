import React, { ReactElement } from 'react';
import SearchBar from '../SearchBar';
import TopHeader from '../TopHeader';
import './style.scss';

const Header = (): ReactElement => {
  return (
    <div className="header">
      <div className="content">
        <TopHeader />
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
