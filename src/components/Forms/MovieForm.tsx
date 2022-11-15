import React, { ReactElement, useState, memo, useCallback } from 'react';
import CloseBtn from '../CloseBtn/index';
import './style.scss';

type MovieFormProps = {
  actionText: string;
  onCloseMovieForm: () => void;
  onShowMovieMessage: () => void;
};

const MovieForm = ({ actionText, onCloseMovieForm, onShowMovieMessage }: MovieFormProps): ReactElement => {
  const [genresShown, setGenresShown] = useState(false);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onCloseMovieForm();
    onShowMovieMessage();
  }, []);

  const showGenres = useCallback((): void => {
    setGenresShown(!genresShown);
  }, []);

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <CloseBtn onClose={onCloseMovieForm} />
      <h1 className="title">{actionText} movie</h1>
      <div className="row">
        <label>
          Title
          <br />
          <input type="text" className="left-field" />
        </label>
        <label>
          Release date
          <br />
          <input type="date" className="right-field" />
        </label>
      </div>
      <div className="row">
        <label>
          Movie url
          <br />
          <input type="url" className="left-field" placeholder="https://" />
        </label>
        <label>
          Rating
          <br />
          <input type="text" className="right-field" placeholder="7.8" />
        </label>
      </div>
      <div className="row">
        <div className="left-field genres-select">
          <div className="select-title" onClick={showGenres}>
            <label>
              Genre
              <br />
              <select className="left-field">
                <option>Select genre</option>
              </select>
            </label>
            <div className="overSelect" />
          </div>
          {genresShown && (
            <div className="genres">
              <label>
                <input type="checkbox" />
                Documentary
              </label>
              <label>
                <input type="checkbox" />
                Comedy
              </label>
              <label>
                <input type="checkbox" />
                Horror
              </label>
              <label>
                <input type="checkbox" />
                Crime
              </label>
            </div>
          )}
        </div>
        <label>
          Runtime
          <br />
          <input type="text" className="right-field" placeholder="minutes" />
        </label>
      </div>
      <div className="row">
        <label>
          Overview
          <br />
          <textarea rows={8} cols={87} placeholder="Movie description" />
        </label>
      </div>
      <div className="btn-wrapper">
        <button type="reset" className="btn">
          Reset
        </button>
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default memo(MovieForm);
