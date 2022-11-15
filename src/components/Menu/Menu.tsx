import React, { ReactElement, useContext, useCallback } from 'react';
import classNames from 'classnames';
import Context from '../../context/Context';
import CloseBtn from '../CloseBtn';
import './style.scss';

type SortingProps = {
  isVisible: boolean;
  onClose: () => void;
};

const Menu = ({ isVisible, onClose }: SortingProps): ReactElement => {
  const classes = classNames('menu', { active: isVisible });
  const [handleEditMovieForm, handleDeleteMovieMessage] = useContext(Context);

  const handleEditBtn = useCallback((): void => {
    onClose();
    handleEditMovieForm();
  }, []);

  const handleDeleteBtn = useCallback((): void => {
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
