import React, { ReactElement, useState, memo, useCallback } from 'react';
import * as Yup from 'yup';
import classNames from 'classnames';
import { Formik, Form, Field } from 'formik';
import CloseBtn from '../CloseBtn/index';
import { isValidUrl } from '../../helpers/utils';
import { genres } from '../../helpers/constants';
import './style.scss';
import Movie from '../../entity/Movie';

type MovieFormProps = {
  actionText: string;
  onCloseMovieForm: () => void;
  onSubmit: (movieItem: Movie) => void;
  movie: Movie;
};

const MovieForm = ({ actionText, onCloseMovieForm, onSubmit, movie = {} }: MovieFormProps): ReactElement => {
  const [genresShown, setGenresShown] = useState(false);

  const showGenres = useCallback((): void => {
    setGenresShown(!genresShown);
  }, [genresShown]);

  const validateRequiredField = (value: string): string | undefined => {
    if (!value) {
      return 'Required field';
    }
  };

  const validateVoteAverage = (value: string): string | undefined => {
    if (Number.isNaN(Number(value)) || Number(value) < 0) {
      return 'Please, enter positive number';
    }
    if (Number(value) > 10) {
      return 'Please, enter number less or equal to 10';
    }
  };

  const validateImgPath = (value: string): string | undefined => {
    if (!value) {
      return 'Required field';
    }

    if (!isValidUrl(value)) {
      return 'Please, enter valid url address';
    }
  };

  const validateRuntime = (value: string): string | undefined => {
    if (!value) {
      return 'Required field';
    }

    if (Number.isNaN(Number(value)) || Number(value) < 0) {
      return 'Please, enter positive number';
    }

    if (Math.floor(Number(value)) !== Number(value)) {
      return 'Please, enter integer number';
    }
  };

  return (
    <Formik
      initialValues={movie}
      enableReinitialize
      validationSchema={Yup.object().shape({
        genres: Yup.array().min(1, 'This field is required'),
      })}
      onSubmit={(values, { resetForm }): void => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values, errors, touched }): ReactElement => {
        return (
          <Form className="movie-form">
            <CloseBtn onClose={onCloseMovieForm} />
            <h1 className="title">{actionText} movie</h1>
            <div className="row">
              <label>
                Title
                <br />
                <Field
                  type="text"
                  name="title"
                  className={classNames('left-field', { 'error-field': errors.title && touched.title })}
                  value={values.title}
                  validate={validateRequiredField}
                />
                <br />
                {errors.title && touched.title && <span>{errors.title}</span>}
              </label>

              <label>
                Release date
                <br />
                <Field type="date" name="releaseDate" className="right-field" value={values.releaseDate} />
              </label>
            </div>

            <div className="row">
              <label>
                Movie url
                <br />
                <Field
                  type="url"
                  name="imgPath"
                  className={classNames('left-field', { 'error-field': errors.imgPath && touched.imgPath })}
                  placeholder="https://"
                  value={values.imgPath}
                  validate={validateImgPath}
                />
                <br />
                {errors.imgPath && touched.imgPath && <span>{errors.imgPath}</span>}
              </label>
              <label>
                Rating
                <br />
                <Field
                  type="text"
                  name="voteAverage"
                  className={classNames('right-field', { 'error-field': errors.voteAverage && touched.voteAverage })}
                  placeholder="7.8"
                  value={values.voteAverage}
                  validate={validateVoteAverage}
                />
                <br />
                {errors.voteAverage && touched.voteAverage && <span>{errors.voteAverage}</span>}
              </label>
            </div>
            <div className="row">
              <div className="left-field genres-select">
                <div className="select-title" onClick={showGenres}>
                  <label>
                    Genre
                    <br />
                    <select className={classNames('left-field', { 'error-field': errors.genres && touched.genres })}>
                      <option>Select genre</option>
                    </select>
                  </label>
                  <br />
                  {errors.genres && touched.genres && <span>{errors.genres}</span>}
                  <div className="overSelect" />
                </div>
                {genresShown && (
                  <div className="genres" role="group">
                    {genres.map((genre) => {
                      return (
                        <label key={genre}>
                          <Field type="checkbox" name="genres" value={genre} />
                          {genre}
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
              <label>
                Runtime
                <br />
                <Field
                  type="text"
                  name="runtime"
                  className={classNames('right-field', { 'error-field': errors.runtime && touched.runtime })}
                  placeholder="minutes"
                  value={values.runtime}
                  validate={validateRuntime}
                />
                <br />
                {errors.runtime && touched.runtime && <span>{errors.runtime}</span>}
              </label>
            </div>
            <div className="row">
              <label>
                Overview
                <br />
                <Field
                  as="textarea"
                  name="overview"
                  className={classNames({ 'error-field': errors.overview && touched.overview })}
                  rows={8}
                  cols={87}
                  placeholder="Movie description"
                  validate={validateRequiredField}
                />
                <br />
                {errors.overview && touched.overview && <span>{errors.overview}</span>}
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default memo(MovieForm);
