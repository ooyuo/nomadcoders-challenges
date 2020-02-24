import express from "express";
import {
  home,
  getLogin,
  getPhotos,
  getProfile
} from "../controllers/globalController";
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/login", getLogin);
globalRouter.get("/photos", getPhotos);
globalRouter.get("/profile", getProfile);

export default globalRouter;
