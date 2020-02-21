import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import coursesRouter from "./routers/coursesRouter";
import apiRouter from "./routers/apiRouter";
import v1_apiRouter from "./routers/v1_apiRouter";
import v2_apiRouter from "./routers/v2_apiRouter";

const app = express();
app.use(routes.home, globalRouter);
app.use(routes.courses, coursesRouter);
app.use(routes.api, apiRouter);
app.use(routes.apiV1, v1_apiRouter);
app.use(routes.apiV2, v2_apiRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
