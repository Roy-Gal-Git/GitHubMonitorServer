const cron = require("node-cron");
const { Octokit } = require("@octokit/rest");
const mongoose = require("mongoose");
const { Pull } = require("../models/pulls");
const octokit = new Octokit({ baseUrl: "https://api.github.com" });

// Call the GitHub API and get the pull requests
const getPullRequests = async () => {
  let { data: pullRequests } = await octokit.request(
    "GET /repos/{owner}/{repo}/pulls?state=all",
    {
      owner: process.env.OWNER,
      repo: process.env.REPO,
    }
  );
  return pullRequests;
};

// Get the commits of a pull request
const getCommitsOfPullRequest = async (pull_number) => {
  let { data: commits } = await octokit.request(
    "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits",
    {
      owner: process.env.OWNER,
      repo: process.env.REPO,
      pull_number,
    }
  );
  return commits;
};

// Update the DataBase with the pull reuqests data
const updateDB = async (pullRequests) => {
  let existingPullRequest;
  let pull;

  for (let pullReq of pullRequests) {
    let { id: pull_request_id, closed_at, user, _links } = pullReq;

    existingPullRequest = await Pull.findOne({ pull_request_id });

    if (existingPullRequest) {
      pull = new Pull(
        {
          title: pullReq.title,
          html_url: pullReq.html_url,
          pull_request_id: pull_request_id,
          number: pullReq.number,
          user: {
            login: user.login,
            user_id: user.id,
            html_url: user.html_url,
          },
          body: pullReq.body,
          created_at: pullReq.created_at,
          updated_at: pullReq.updated_at,
          closed_at: closed_at,
          merged_at: pullReq.merged_at,
          repo: {
            id: pullReq.head.repo.id,
            name: pullReq.head.repo.name,
          },
          commits: {
            href: _links.commits.href,
            amount: (await getCommitsOfPullRequest(pullReq.number)).length,
          },
        },
        { _id: false }
      );

      await Pull.findByIdAndUpdate(existingPullRequest._id, pull, {
        new: true,
      });
    } else {
      pull = new Pull({
        title: pullReq.title,
        html_url: pullReq.html_url,
        pull_request_id: pull_request_id,
        number: pullReq.number,
        user: {
          login: user.login,
          user_id: user.id,
          html_url: user.html_url,
        },
        body: pullReq.body,
        created_at: pullReq.created_at,
        updated_at: pullReq.updated_at,
        closed_at: closed_at,
        merged_at: pullReq.merged_at,
        repo: {
          id: pullReq.head.repo.id,
          name: pullReq.head.repo.name,
        },
        commits: {
          href: _links.commits.href,
          amount: (await getCommitsOfPullRequest(pullReq.number)).length,
        },
      });

      await pull.save();
    }
  }
};

module.exports = function () {
  cron.schedule("*/2 * * * *", async () => {
    try {
      pullRequests = await getPullRequests();
      updateDB(pullRequests);
    } catch (error) {
      console.log(error.message);
    }
  });
};
