import React, { ReactElement, memo, Dispatch, SetStateAction, useCallback, useContext, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import Context from '../../context/Context';
import './style.scss';
import Movie from '../../types/Movie';
import menuIcon from '../../common/assets/svg/menu-icon.svg';
import Menu from '../Menu';
import { getYear } from '../../helpers/utils';
import useToggle from '../../hooks/useToggle';
import setDefaultImage from '../../helpers/setDefaultImage';
import { markMovieForDeletion, saveMovieForEditing } from '../../store/moviesSlice';

type MovieSearchProps = { movie: string };
type MovieCardProps = {
  movie: Movie;
  onClick: Dispatch<SetStateAction<MovieSearchProps>>;
};

const MovieCard = ({ movie, onClick }: MovieCardProps): ReactElement => {
  const [isMenuVisible, toggleMenuVisible] = useToggle();
  const [handleEditMovieForm, handleDeleteMovieMessage] = useContext(Context);
  const dispatch = useDispatch();

  const handleMenuIconClick = useCallback(
    (event: MouseEvent<HTMLImageElement>): void => {
      event.stopPropagation();
      toggleMenuVisible();
    },
    [movie]
  );

  const handleCardClick = useCallback((): void => {
    onClick({ movie: movie.id });
  }, [movie]);

  const handleEditBtn = useCallback((): void => {
    dispatch(saveMovieForEditing(movie));
    toggleMenuVisible();
    handleEditMovieForm();
  }, [movie]);

  const handleDeleteBtn = useCallback((): void => {
    dispatch(markMovieForDeletion(movie.id));
    toggleMenuVisible();
    handleDeleteMovieMessage();
  }, [movie]);

  return (
    <div data-testid="card" className="card" onClick={handleCardClick}>
      <div className="movie-cover">
        <img className="movie-img" src={movie.imgPath} alt={movie.title} onError={setDefaultImage} />
        <img className="menu-icon" src={menuIcon} alt="Menu" onClick={handleMenuIconClick} />
        <Menu isVisible={isMenuVisible} onClose={toggleMenuVisible} onDelete={handleDeleteBtn} onEdit={handleEditBtn} />
      </div>
      <div className="title-wrapper">
        <p className="card-title">{movie.title}</p>
        <p className="year">{getYear(movie.releaseDate)}</p>
      </div>
      <p className="genres">{movie.genres.join(', ')}</p>
    </div>
  );
};

export default memo(MovieCard);
