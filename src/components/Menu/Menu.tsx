import React, { ReactElement, useContext } from 'react';
import Context from '../../context/Context';
import CloseBtn from '../CloseBtn';
import './style.scss';

type SortingProps = {
  visible: boolean;
  handleClose: () => void;
};

const Menu = ({ visible, handleClose }: SortingProps): ReactElement => {
  const classes = ['menu'];
  const [handleEditMovieForm, handleDeleteMovieMessage] = useContext(Context);

  if (visible) {
    classes.push('active');
  }

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
      className={classes.join(' ')}
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
