/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
export const home = (req, res) => {
    res.render("home");
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
export const getEdit = (req, res) => {
    res.render("edit");
};
export const getDelete = (req, res) => {
    res.render("delete");
};
export const getSearch = (req, res) => {
    res.render("search");
};


