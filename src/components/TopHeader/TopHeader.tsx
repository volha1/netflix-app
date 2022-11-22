import React, { ReactElement } from 'react';
import './style.scss';

type TopHeaderProps = {
  onAddMovieForm: () => void;
};

const TopHeader = ({ onAddMovieForm }: TopHeaderProps): ReactElement => {
  return (
    <div className="top-header">
      <p className="logo">
        <span>netflix</span>roulette
      </p>
      <button type="button" className="btn add-btn" onClick={onAddMovieForm}>
        + Add movie
      </button>
    </div>
  );
};

export default TopHeader;
