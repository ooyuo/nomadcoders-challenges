/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
export const home = async (req, res) => {
    try {
        const movie = await Movie.find({});
        console.log(movie);
        res.render("home", { pageTitle: "Home", movie });
    } catch(error) {
        res.render("home", { pageTitle: "Home", movie: [] });
    }
};
export const getCreate = (req, res) => {
    res.render("create", { pageTitle: "Create" });
};
export const postCreate = async (req, res) => {
    let {
        body: { title, year, rating, synopsis, genres }
    } = req;
    genres = genres.split(",");
    
    const newMovie = await Movie.create({
        title,
        year,
        rating,
        synopsis,
        genres
    });
    console.log(newMovie);
    res.redirect(`/${newMovie.id}`);
};
export const getDetail = async (req, res) => {
    const {
        params: { id }
    } = req;

    try {
        
        const movie = await Movie.findById(id);
   
        res.render("detail", { pageTitle: movie.title, movie });

    } catch(error) {

    }
};
export const getEdit = async (req, res) => {
    const {
        params: { id }
    } = req;
    console.log(id);

    try {
        const movie = await Movie.findById(id);
        const genre = movie.genres.join(",");
        console.log(movie);
        res.render("edit", { pageTitle: "Edit", movie, genre });
    } catch(error) {
        res.render("edit", { pageTitle: "Edit", movie: [] });
    }
};
export const postEdit = async (req, res) => {
    let {
        params: { id },
        body: { title, year, rating, synopsis, genres }
    } = req;
    genres = genres.split(",");

    console.log(title, year, rating, synopsis, genres);

    try {
        await Movie.findByIdAndUpdate({_id: id }, { title, year, rating, synopsis, genres });
        res.redirect(`/${id}`);
    } catch(error) {
        res.redirect("/");
    }
};
export const getDelete = async (req, res) => {
    const {
        params: { id }
    } = req;

    try {
        await Movie.findByIdAndDelete({ _id: id });
    } catch(error) {
        console.log(error);
    }
    res.redirect("/");
};
export const getSearch = async (req, res) => {
    const {
        query: { year, rating }
    } = req;
    let movie;
    try {
        if (year) {
            movie = await Movie.find({
                year: { $gte: year }
            });
            
            res.render("search", { pageTitle: `Filtering by year: ${year}`, movie, year});
        } else if (rating) {
            movie = await Movie.find({
                rating: { $gte: rating }
            });

            res.render("search", { pageTitle: `Filtering by rating: ${rating}`, movie, rating });
        }

    } catch(error) {
        if (year) {
            res.render("search", { pageTitle: `Filtering by year: ${year}`, movie: [], year});
        } else if (rating) {
            res.render("search", { pageTitle: `Filtering by rating: ${rating}`, movie: [], rating});
        }
    }
};


