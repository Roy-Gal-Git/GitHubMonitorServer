import React from "react";
import Table from "./common/table";

class PullsTable extends React.Component {
  columns = [
    {
      label: "Title",
      path: "title",
      content: (pull) => (
        <a className="btn btn-light btn-outline-primary" href={pull.html_url}>
          {pull.title}
        </a>
      ),
    },
    { label: "ID", path: "pull_request_id" },
    { label: "Number", path: "number" },
    {
      label: "User",
      path: "user.login",
      content: (pull) => (
        <a
          className="btn btn-light btn-outline-primary"
          href={pull.user.html_url}
        >
          {pull.user.login}
        </a>
      ),
    },
    { label: "body", path: "body" },
    { label: "Created At", path: "created_at" },
    { label: "Updated At", path: "updated_at" },
    { label: "Closed At", path: "closed_at" },
    { label: "Merged At", path: "merged_at" },
    { label: "Repo", path: "repo.name" },
    {
      label: "Commits",
      path: "commits.amount",
      content: (pull) => (
        <a
          className="btn btn-light btn-outline-primary"
          href={pull.commits.href}
        >
          {pull.commits.amount}
        </a>
      ),
    },
  ];

  render() {
    const { pulls } = this.props;

    return <Table data={pulls} columns={this.columns} />;
  }
}

export default PullsTable;
