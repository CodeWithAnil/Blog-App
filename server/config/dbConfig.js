const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://anilvishwakarma4494:anil@cluster0.vloaxuc.mongodb.net/");

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB connected successfully");
});

connection.on("error", (err) => {
  console.log("Mongo DB connection failed");
});


module.exports = connection;