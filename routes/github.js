const { Octokit } = require("@octokit/rest");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const octokit = new Octokit({ baseUrl: "https://api.github.com" });

router.get("/", async (req, res) => {
  const { data: pullRequests } = await octokit.rest.pulls.get({
    owner: "roy-gal-git",
    repo: "connect-four",
  });
  res.send(pullRequests);
});

module.exports = router;
