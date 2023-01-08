/* eslint-disable @typescript-eslint/no-explicit-any */
import defaultSrc from '../common/assets/images/default-image.png';

const setDefaultImage = (event: any): void => {
  event.target.src = defaultSrc;
};

export default setDefaultImage;
