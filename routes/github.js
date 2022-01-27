const { Octokit } = require("@octokit/rest");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const octokit = new Octokit({ baseUrl: "https://api.github.com" });

router.get("/", async (req, res) => {
  const { data: pullRequests } = await octokit.request(
    "GET /repos/{owner}/{repo}/pulls",
    {
      owner: process.env.OWNER,
      repo: process.env.REPO,
    }
  );
  res.send(pullRequests);
});

// router.post("/", async (req, res) => {
// TODO: update the DB
// לבדוק האם האיידי של הפול ריקווסט קיים בפול ריקווסט אחר בדאטה בייס
// אם כן - לדרוס את המידע של הפול ריקווסט הקיים עם החדש
// אם לא - להוסיף את הפול ריקווסט לדאטה בייס
// });

module.exports = router;
