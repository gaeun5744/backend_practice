const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://GaEun:rkdms3816@cluster0.ej7opfb.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen("5000", () => {
  console.log("Backend is running");
});
