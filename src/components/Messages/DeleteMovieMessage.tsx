import React, { ReactElement, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import CloseBtn from '../CloseBtn/index';
import './style.scss';
import { deleteMovie } from '../../store/actionCreators';

type DeleteMovieWindowProps = {
  onClose: () => void;
};

const DeleteMovieMessage = ({ onClose }: DeleteMovieWindowProps): ReactElement => {
  const dispatch = useDispatch();

  const handlehandleClick = useCallback((): void => {
    dispatch(deleteMovie());
    onClose();
  }, []);

  return (
    <div className="modal-window">
      <CloseBtn onClose={onClose} />
      <h1 className="title">Delete movie</h1>
      <p>Are you sure you want to delete this movie?</p>
      <div className="btn-wrapper">
        <button type="button" className="btn" onClick={handlehandleClick}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default memo(DeleteMovieMessage);
