import express from "express";
import request from "request";
import status from "./status";

const app = express();


app.get("/", async (req, res) => {
    let {
        query: { url }
    } = req;
    console.log(url);
    if ( !url.includes("http") ) {
        url = `http://${url}`;
        console.log(url);
    }
    
    await request(url, function (error, response, body) {
      
        if (response && response.statusCode <= 445) {
            status.statusCode = "UP"
            res.send(status.statusCode);
        } else {
            status.statusCode = "DOWN";
            res.send(status.statusCode);
        }
    });
});

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
