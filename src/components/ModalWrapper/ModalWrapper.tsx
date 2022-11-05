import React, { ReactElement } from 'react';
import './style.scss';

type ChangeMovieWindowProps = {
  children: ReactElement;
  visible: boolean;
};

const ModalWrapper = ({ children, visible }: ChangeMovieWindowProps): ReactElement => {
  const classes = ['modal'];

  if (visible) {
    classes.push('active');
  }

  return (
    <div className={classes.join(' ')}>
      <div
        className="modal-content"
        onClick={(e): void => {
          return e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
