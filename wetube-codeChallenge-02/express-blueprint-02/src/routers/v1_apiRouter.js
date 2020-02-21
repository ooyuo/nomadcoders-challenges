import express from "express";
import routes from "../routes";
import { getApiBuy, getApiRefund } from "../controllers/apiController";

const v1_apiRouter = express.Router();

v1_apiRouter.get(routes.apiBuy, getApiBuy);
v1_apiRouter.get(routes.apiRefund, getApiRefund);

export default v1_apiRouter;
