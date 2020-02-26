import express from "express";
import routes from "../routes";
import {
  getCourses,
  getCoursesNew,
  getCoursesMine
} from "../controllers/coursesController";

const coursesRouter = express.Router();

coursesRouter.get(routes.home, getCourses);
coursesRouter.get(routes.coursesNew, getCoursesNew);
coursesRouter.get(routes.coursesMine, getCoursesMine);

export default coursesRouter;
