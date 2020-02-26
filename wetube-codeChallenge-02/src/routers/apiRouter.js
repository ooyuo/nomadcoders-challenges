import express from "express";
import routes from "../routes";
import { getApiDoctumentation } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get(routes.apiDoc, getApiDoctumentation);

export default apiRouter;
