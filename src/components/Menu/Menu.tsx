import React, { ReactElement } from 'react';
import CloseBtn from '../CloseBtn';
import './style.scss';

type SortingProps = {
  visible: boolean;
  handleClose: () => void;
  deleteMovie: () => void;
  editMovie: () => void;
};

const Menu = ({ visible, handleClose, deleteMovie, editMovie }: SortingProps): ReactElement => {
  const classes = ['menu'];

  if (visible) {
    classes.push('active');
  }

  const handleEditBtn = (): void => {
    handleClose();
    editMovie();
  };

  const handleDeleteBtn = (): void => {
    handleClose();
    deleteMovie();
  };

  return (
    <div className={classes.join(' ')}>
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
