import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";
import { middlewares } from "./middlewares";

const app = express();
app.use(middlewares);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`✅  Server Ready!`));
