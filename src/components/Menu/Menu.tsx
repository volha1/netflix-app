import React, { ReactElement, useContext } from 'react';
import classNames from 'classnames';
import Context from '../../context/Context';
import CloseBtn from '../CloseBtn';
import './style.scss';

type SortingProps = {
  isVisible: boolean;
  handleClose: () => void;
};

const Menu = ({ isVisible, handleClose }: SortingProps): ReactElement => {
  const classes = classNames('menu', { active: isVisible });
  const [handleEditMovieForm, handleDeleteMovieMessage] = useContext(Context);

  const handleEditBtn = (): void => {
    handleClose();
    handleEditMovieForm();
  };

  const handleDeleteBtn = (): void => {
    handleClose();
    handleDeleteMovieMessage();
  };

  return (
    <div
      className={classes}
      onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        event.stopPropagation();
      }}
    >
      <CloseBtn handleClose={handleClose} />
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
