const mongoose = require("mongoose");

const pullSchema = new mongoose.Schema({
  body: {
    type: String,
  },
});

const Pull = mongoose.model("Pull", pullSchema);

exports.Pull = Pull;
exports.pullSchema = pullSchema;
