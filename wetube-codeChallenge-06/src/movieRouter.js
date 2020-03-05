import express from "express";
import { home, getCreate, postCreate, getDetail, getSearch, getEdit, postEdit, getDelete } from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);
movieRouter.get("/create", getCreate);
movieRouter.post("/create", postCreate);
movieRouter.get("/search", getSearch);
movieRouter.get("/:id/edit", getEdit);
movieRouter.post("/:id/edit", postEdit);
movieRouter.get("/:id", getDetail);
movieRouter.get("/:id/delete", getDelete);

export default movieRouter;
