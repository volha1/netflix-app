import defaultSrc from '../common/assets/images/default-image.png';

const setDefaultImage = (event): void => {
  event.target.src = defaultSrc;
};

export default setDefaultImage;
