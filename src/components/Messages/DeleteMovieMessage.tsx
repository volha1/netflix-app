import React, { ReactElement, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseBtn from '../CloseBtn/index';
import { deleteMovieById } from '../../store/moviesSlice';
import './style.scss';

type DeleteMovieWindowProps = {
  onClose: () => void;
};

const DeleteMovieMessage = ({ onClose }: DeleteMovieWindowProps): ReactElement => {
  const dispatch = useDispatch();
  const movieIdForDeletion = useSelector((state) => {
    return state.moviesReducer.movieIdForDeletion;
  });

  const handleClick = useCallback((): void => {
    dispatch(deleteMovieById(movieIdForDeletion));
    onClose();
  }, [movieIdForDeletion]);

  return (
    <div className="modal-window">
      <CloseBtn onClose={onClose} />
      <h1 className="title">Delete movie</h1>
      <p>Are you sure you want to delete this movie?</p>
      <div className="btn-wrapper">
        <button type="button" className="btn" onClick={handleClick}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default memo(DeleteMovieMessage);
