import express from 'express';
//let express = require("express")

let port = process.env.PORT || 3000;
let app = express();

app.get("/", (req,res) => {
    res.send("welcome to my api")
})

let bookRoutes = express.Router();

app.use(bookRoutes); //bookRoutes(bookModel)


app.listen(port, () => {
  console.log("listening to http://localhost:" + port);
})