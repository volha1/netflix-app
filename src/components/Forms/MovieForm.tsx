import React, { ReactElement, useState, memo, useCallback } from 'react';
import * as Yup from 'yup';
import classNames from 'classnames';
import { Formik, Form, Field } from 'formik';
import CloseBtn from '../CloseBtn/index';
import { isValidUrl } from '../../helpers/utils';
import { genres } from '../../helpers/constants';
import './style.scss';
import Movie from '../../types/Movie';

type MovieFormProps = {
  actionText: string;
  onCloseMovieForm: () => void;
  onSubmit: (movieItem: Movie) => void;
  movie: Movie;
};

const MovieSchema = Yup.object().shape({
  title: Yup.string().required('Required field'),
  voteAverage: Yup.number()
    .typeError('Please, enter number')
    .required('Required field')
    .min(1, 'Please, enter number more or equal to 1')
    .max(10, 'Please, enter number less or equal to 10'),
  imgPath: Yup.string()
    .required('Required field')
    .trim()
    .test('test-url', 'Invalid url', (value) => {
      return isValidUrl(value);
    }),
  runtime: Yup.number()
    .typeError('Please, enter number')
    .required('Required field')
    .min(1, 'Please, enter number more or equal to 1'),
  genres: Yup.array().min(1, 'This field is required'),
  overview: Yup.string().required('Required field'),
});

const MovieForm = ({ actionText, onCloseMovieForm, onSubmit, movie = {} }: MovieFormProps): ReactElement => {
  const [genresShown, setGenresShown] = useState(false);

  const showGenres = useCallback((): void => {
    setGenresShown(!genresShown);
  }, [genresShown]);

  return (
    <Formik
      initialValues={movie}
      enableReinitialize
      validationSchema={MovieSchema}
      onSubmit={(values, { resetForm }): void => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched }): ReactElement => {
        return (
          <Form className="movie-form">
            <CloseBtn onClose={onCloseMovieForm} />
            <h1 className="title">{actionText} movie</h1>
            <div className="row">
              <label>
                Title
                <br />
                <Field
                  name="title"
                  className={classNames('left-field', { 'error-field': errors.title && touched.title })}
                />
                <br />
                {errors.title && touched.title && <span>{errors.title}</span>}
              </label>

              <label>
                Release date
                <br />
                <Field type="date" name="releaseDate" className="right-field" />
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
                />
                <br />
                {errors.imgPath && touched.imgPath && <span>{errors.imgPath}</span>}
              </label>
              <label>
                Rating
                <br />
                <Field
                  name="voteAverage"
                  className={classNames('right-field', { 'error-field': errors.voteAverage && touched.voteAverage })}
                  placeholder="7.8"
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
                  name="runtime"
                  className={classNames('right-field', { 'error-field': errors.runtime && touched.runtime })}
                  placeholder="minutes"
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
