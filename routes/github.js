const { Octokit } = require("@octokit/rest");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const octokit = new Octokit({ baseUrl: "https://api.github.com" });

router.get("/", async (req, res) => {
  const { data: pullRequests } = await octokit.request(
    "GET /repos/{owner}/{repo}/pulls",
    {
      owner: "roy-gal-git",
      repo: "CommitLogger",
    }
  );
  res.send(pullRequests);
});

module.exports = router;
