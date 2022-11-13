import React, { ReactElement, memo } from 'react';
import CloseBtn from '../CloseBtn/index';
import './style.scss';

type DeleteMovieWindowProps = {
  handleClose: () => void;
};

const DeleteMovieMessage = ({ handleClose }: DeleteMovieWindowProps): ReactElement => {
  return (
    <div className="modal-window">
      <CloseBtn handleClose={handleClose} />
      <h1 className="title">Delete movie</h1>
      <p>Are you sure you want to delete this movie?</p>
      <div className="btn-wrapper">
        <button type="button" className="btn" onClick={handleClose}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default memo(DeleteMovieMessage);