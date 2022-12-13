import { Request, Response } from "express";
import { connectMongoDb } from "./config/connectdb";

const express =  require('express');
// const morgan = require('morgan');

//Route file
const product = require('./routes/product');
connectMongoDb();
const app = express();
app.use(express.json());

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

app.use("/api/prodcuts/",product)

app.get('/ping', (req:Request, res:Response) => {
  res.send("pong")
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
