import React, { ReactElement } from 'react';
import classNames from 'classnames';
import CloseBtn from '../CloseBtn';
import { markMovieForDeletion } from '../../store/moviesSlice';
import './style.scss';

type SortingProps = {
  isVisible: boolean;
  onClose: () => void;
  onDelete: () => void;
  onEdit: () => void;
};

const Menu = ({ isVisible, onClose, onDelete, onEdit }: SortingProps): ReactElement => {
  const classes = classNames('menu', { active: isVisible });

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
          <button type="button" onClick={onEdit} data-testid="edit-btn">
            Edit
          </button>
        </li>
        <li>
          <button type="button" onClick={onDelete} data-testid="delete-btn">
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
