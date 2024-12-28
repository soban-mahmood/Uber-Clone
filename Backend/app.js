const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/user.routes");
const connectTodb = require("./db/db");
connectTodb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/users', userRoutes);

module.exports = app;
