const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectTodb = require("./db/db");
const cookieParser = require("cookie-parser");
const app = express();
const userRoutes = require("./routes/user.routes");

const captainRoutes = require("./routes/captain.routes");

connectTodb();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
