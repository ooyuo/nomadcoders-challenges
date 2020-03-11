import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";

const app = express();

const upload = multer({ dest: "uploads/"});

const postRead = (req, res) => {
    const data = fs.readFileSync(req.file.path, "utf-8");
    res.render("read", { data });

};

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.render("main"));
app.post("/read", upload.single("file", (req, res) => { res.send(req.file) }), postRead);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
