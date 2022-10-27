import React from 'react';
import SearchBar from '../SearchBar';
import TopHeader from '../TopHeader';
import './style.scss';

const Header = () => {
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
