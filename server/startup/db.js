const mongoose = require("mongoose");
// const winston = require("winston");

let db = "mongodb://localhost:27017/commitlogger";
module.exports = function () {
  mongoose.connect(db).then(() => console.log(`Connected to ${db}...`));
};
