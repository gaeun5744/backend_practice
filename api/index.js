const express = require("express");
const app = express();
const port = 5000;

const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

dotenv.config();

app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://GaEun:rkdms3816@cluster0.ej7opfb.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

app.listen(port, () => {
  console.log("Backend is running");
});
