import express from 'express';
import baseRoutes from './routers/baseRoutes';
import {MongoClient} from 'mongodb';
import mongoose from 'mongoose';
import db from './config/db';

let port = process.env.PORT || 3000;
let app = express();

mongoose.connect(db.url);

console.log("mongodb URL: ", db.url)

MongoClient.connect(db.url, (err, database) => { 
  if (err) return console.log("server.js err");
  baseRoutes(app,database);
  
  app.listen(port, () => {
    console.log("listening to http://localhost:" + port)
  })

})