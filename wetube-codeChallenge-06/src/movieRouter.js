import express from "express";
import { home, getCreate, postCreate, getDetail } from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);
movieRouter.get("/create", getCreate);
movieRouter.post("/create", postCreate);
movieRouter.get("/:id", getDetail);
// movieRouter.get("/:id/edit", getEdit);
// movieRouter.get("/:id/delete", getDelete);
// movieRouter.get("/search", getSearch);

export default movieRouter;
