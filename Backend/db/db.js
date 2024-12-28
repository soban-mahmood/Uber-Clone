const mongoose = require("mongoose");
DB_CONNECT=mongodb://localhost:27017/your-database-name
require('dotenv').config();
function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT, {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.error("Error connecting to DB:", err.message);
    });
}

module.exports = connectToDb;
