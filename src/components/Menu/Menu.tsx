import React, { ReactElement, useContext, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import Context from '../../context/Context';
import CloseBtn from '../CloseBtn';
import { markMovieForDeletion, saveMovieForEditing } from '../../store/moviesSlice';
import './style.scss';
import Movie from '../../entity/Movie';

type SortingProps = {
  isVisible: boolean;
  onClose: () => void;
  movie: Movie;
};

const Menu = ({ isVisible, onClose, movie }: SortingProps): ReactElement => {
  const classes = classNames('menu', { active: isVisible });
  const [handleEditMovieForm, handleDeleteMovieMessage] = useContext(Context);
  const dispatch = useDispatch();

  const handleEditBtn = useCallback((): void => {
    dispatch(saveMovieForEditing(movie));
    onClose();
    handleEditMovieForm();
  }, []);

  const handleDeleteBtn = useCallback((): void => {
    dispatch(markMovieForDeletion(movie.id));
    onClose();
    handleDeleteMovieMessage();
  }, []);

  return (
    <div
      className={classes}
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        event.stopPropagation();
      }}
    >
      <CloseBtn onClose={onClose} />
      <ul>
        <li>
          <button type="button" onClick={handleEditBtn}>
            Edit
          </button>
        </li>
        <li>
          <button type="button" onClick={handleDeleteBtn}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
