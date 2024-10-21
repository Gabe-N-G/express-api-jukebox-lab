import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import logger from "morgan"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//import controler
import trackRouter from "./controllers/tracks";

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors())
app.use(express.json());
app.use(logger('dev'))
// Routes go here
app.use('/tracks', trackRouter)


app.listen(3000, () => {
  console.log('The express app is ready!');
});