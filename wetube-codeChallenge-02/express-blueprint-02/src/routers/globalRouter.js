import express from "express";
import routes from "../routes";
import {
  home,
  getJoin,
  getConfirmAccount,
  getLogin
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.get(routes.confirmAccount, getConfirmAccount);

export default globalRouter;
