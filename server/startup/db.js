const mongoose = require("mongoose");

let db = "mongodb://localhost:27017/loggedPullRequests";
module.exports = function () {
  mongoose.connect(db).then(() => console.log(`Connected to ${db}...`));
};
