import React, { ReactElement, useContext, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import Context from '../../context/Context';
import CloseBtn from '../CloseBtn';
import { markMovieForDeletion } from '../../store/moviesSlice';
import './style.scss';

type SortingProps = {
  isVisible: boolean;
  onClose: () => void;
  movieId: string;
};

const Menu = ({ isVisible, onClose, movieId }: SortingProps): ReactElement => {
  const classes = classNames('menu', { active: isVisible });
  const [handleEditMovieForm, handleDeleteMovieMessage] = useContext(Context);
  const dispatch = useDispatch();

  const handleEditBtn = useCallback((): void => {
    onClose();
    handleEditMovieForm();
  }, []);

  const handleDeleteBtn = useCallback((): void => {
    dispatch(markMovieForDeletion(movieId));
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
