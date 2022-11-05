import React, { ReactElement } from 'react';
import './style.scss';

const TopHeader = (): ReactElement => {
  return (
    <div className="top-header">
      <p className="logo">
        <span>netflix</span>roulette
      </p>
      <button type="button" className="btn add-btn">
        + Add movie
      </button>
    </div>
  );
};

export default TopHeader;