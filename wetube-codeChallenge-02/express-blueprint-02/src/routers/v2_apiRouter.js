import express from "express";
import routes from "../routes";
import { getApiRemove, getApiEdit } from "../controllers/apiController";

const v2_apiRouter = express.Router();

v2_apiRouter.get(routes.apiRemove, getApiRemove);
v2_apiRouter.get(routes.apiEdit, getApiEdit);

export default v2_apiRouter;
