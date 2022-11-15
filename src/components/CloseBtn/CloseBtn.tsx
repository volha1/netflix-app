import React, { ReactElement, memo } from 'react';
import './style.scss';

type CloseBtnProps = {
  onClose: () => void;
};

const CloseBtn = ({ onClose }: CloseBtnProps): ReactElement => {
  return <div className="close-btn" onClick={onClose} />;
};

export default memo(CloseBtn);
