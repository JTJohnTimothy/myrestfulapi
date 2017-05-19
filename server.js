import express from 'express';
import bookRouter from './routers/bookRouter.js'

let port = process.env.PORT || 3000;
let app = express();

app.get("/", (req,res) => {
    res.send("welcome to my api")
})

app.use('/api', bookRouter()); 

app.listen(port, () => console.log("listening to http://localhost:" + port))