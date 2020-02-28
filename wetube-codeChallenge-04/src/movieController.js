import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("movies", { pageTitle: "movies", movies });
};
export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const movie = getMovieById(id);
    res.render("detail", { pageTitle: movie.title, movie });
  } catch (error) {
    res.render("404");
  }
};
export const filterMovie = (req, res) => {
  let movies;
  const {
    query: { year, rating }
  } = req;

  try {
    if (year) {
      movies = getMovieByMinimumYear(year);
    } else {
      movies = getMovieByMinimumRating(rating);
    }
    res.render("movies", { pageTitle: "filter Movie", movies, year, rating });
  } catch (error) {
    res.render("404");
  }
};
