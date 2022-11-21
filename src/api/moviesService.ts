import { addAllMovies } from '../store/actionCreators';
import { url, invalidImgPaths } from '../helpers/constants';
import defaultImg from '../common/assets/images/default-image.png';
import Movie from '../entity/Movie';

const getMovies = () => {
  return async (dispath: () => void): Promise<void> => {
    const response = await fetch(`${url}/movies`);
    const json = await response.json();
    const movies = json.data.map((movie) => {
      const imgPath = invalidImgPaths.includes(movie.poster_path) ? defaultImg : movie.poster_path;
      return {
        id: movie.id,
        title: movie.title,
        voteAverage: movie.vote_average,
        year: movie.release_date,
        imgPath,
        genres: movie.genres,
        overview: movie.overview,
        runtime: movie.runtime,
      };
    });
    dispath(addAllMovies(movies));
  };
};

export default getMovies;
