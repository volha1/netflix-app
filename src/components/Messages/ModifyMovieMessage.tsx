import React, { ReactElement, memo } from 'react';
import CloseBtn from '../CloseBtn/index';
import successIcon from '../../common/assets/svg/success-icon.svg';
import './style.scss';

type ModifyMovieWindowProps = {
  onClose: () => void;
  text: string;
};

const ModifyMovieMessage = ({ onClose, text }: ModifyMovieWindowProps): ReactElement => {
  return (
    <div className="modal-window add-movie">
      <CloseBtn onClose={onClose} />
      <div className="icon-wrapper">
        <img className="menu-icon" src={successIcon} alt="Success" />
      </div>
      <h1 className="title">Congratulations!</h1>
      <p>The movie has been {text} database successfully</p>
    </div>
  );
};

export default memo(ModifyMovieMessage);
