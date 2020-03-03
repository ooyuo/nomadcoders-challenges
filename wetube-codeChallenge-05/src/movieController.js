import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/

export const getAdd = (req, res) => {
  res.render("addMovie", { pageTitle: "Add Movie" });
};

export const postAdd = (req, res) => {
  const {
    body: { title, synopsis, genres }
  } = req;
  console.log(title, synopsis, genres);
  try {
    const genre = genres.split(",");
    const movie = {
      title,
      synopsis,
      genres: genre
    };

    addMovie(movie);

    res.redirect("/");
  } catch (error) {
    res.status("400");
  }
};
