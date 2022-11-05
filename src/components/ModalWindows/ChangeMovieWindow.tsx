import React, { ReactElement } from 'react';
import CloseBtn from '../CloseBtn/index';
import successIcon from '../../common/assets/svg/success-icon.svg';
import './style.scss';

type ChangeMovieWindowProps = {
  handleClose: () => void;
  text: string;
};

const ChangeMovieWindow = ({ handleClose, text }: ChangeMovieWindowProps): ReactElement => (
  <div className="modal-window add-movie">
    <CloseBtn handleClose={handleClose} />
    <div className="icon-wrapper">
      <img className="menu-icon" src={successIcon} alt="Success" />
    </div>
    <h1 className="title">Congratulations!</h1>
    <p>The movie has been {text} database successfully</p>
  </div>
);

export default ChangeMovieWindow;
