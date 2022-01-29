const mongoose = require("mongoose");

const pullSchema = new mongoose.Schema({
  title: { type: String },
  html_url: { type: String },
  pull_request_id: { type: Number },
  number: { type: Number },
  user: {
    login: { type: String },
    user_id: { type: Number },
    html_url: { type: String },
  },
  body: { type: String },
  created_at: { type: String },
  updated_at: { type: String },
  closed_at: { type: String },
  merged_at: { type: String },
  repo: {
    id: { type: Number },
    name: { type: String },
  },
  commits: {
    href: { type: String },
    amount: { type: Number },
  },
});

const Pull = mongoose.model("Pull", pullSchema);

exports.Pull = Pull;
exports.pullSchema = pullSchema;
