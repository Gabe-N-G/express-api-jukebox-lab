import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import logger from "morgan"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});