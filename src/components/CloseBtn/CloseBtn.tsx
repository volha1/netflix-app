import React, { ReactElement } from 'react';
import './style.scss';

type CloseBtnProps = {
  handleClose: () => void;
};

const CloseBtn = ({ handleClose }: CloseBtnProps): ReactElement => {
  return <div className="close-btn" onClick={handleClose} />;
};

export default CloseBtn;
