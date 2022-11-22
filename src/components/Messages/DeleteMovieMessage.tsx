import React, { ReactElement, memo } from 'react';
import CloseBtn from '../CloseBtn/index';
import './style.scss';

type DeleteMovieWindowProps = {
  onClose: () => void;
};

const DeleteMovieMessage = ({ onClose }: DeleteMovieWindowProps): ReactElement => {
  return (
    <div className="modal-window">
      <CloseBtn onClose={onClose} />
      <h1 className="title">Delete movie</h1>
      <p>Are you sure you want to delete this movie?</p>
      <div className="btn-wrapper">
        <button type="button" className="btn" onClick={onClose}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default memo(DeleteMovieMessage);
