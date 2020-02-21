import express from "express";

const app = express();
// Codesanbox does not need PORT :)

const handleProtected = (req, res) => {
  res.redirect("/");
};

const logger = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

app.use(logger);

app.get("/", (req, res) => res.send("Home"));
app.get("/about-us", (req, res) => res.send("About Us"));
app.get("/contact", (req, res) => res.send("Contact"));
app.get("/protected", handleProtected);

app.listen(() => console.log(`Listening!`));
