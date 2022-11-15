import React, { ReactElement, useCallback } from 'react';
import classNames from 'classnames';
import './style.scss';

type ChangeMovieWindowProps = {
  children: ReactElement;
  isVisible: boolean;
};

const ModalWrapper = ({ children, isVisible }: ChangeMovieWindowProps): ReactElement => {
  const classes = classNames('modal', { active: isVisible });

  const handleClick = useCallback((e: Event): void => {
    e.stopPropagation();
  }, []);

  return (
    <div className={classes}>
      <div className="modal-content" onClick={handleClick}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
