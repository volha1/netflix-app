import React, { ReactElement } from 'react';
import './style.scss';

type TopHeaderProps = {
  handleMovieForm: () => void;
};

const TopHeader = ({ handleMovieForm }: TopHeaderProps): ReactElement => {
  return (
    <div className="top-header">
      <p className="logo">
        <span>netflix</span>roulette
      </p>
      <button type="button" className="btn add-btn" onClick={handleMovieForm}>
        + Add movie
      </button>
    </div>
  );
};

export default TopHeader;
