import React, { Component } from "react";
import { getPulls } from "../services/pullsService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import PullsTable from "./pullsTable";

class Pulls extends Component {
  state = {
    pulls: [],
    pageSize: 4,
    currentPage: 1,
  };

  async componentDidMount() {
    const { data: pulls } = await getPulls();
    console.log(pulls);
    this.setState({ pulls });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPageData = () => {
    const { currentPage, pageSize, pulls } = this.state;

    const allPulls = paginate(pulls, currentPage, pageSize);

    return { totalCount: pulls.length, data: allPulls };
  };

  render() {
    const { currentPage, pageSize, pulls } = this.state;

    if (pulls.length === 0)
      return <p>There are no pull requests in the database.</p>;

    const { totalCount, data: allPulls } = this.getPageData();

    return (
      <React.Fragment>
        <div className="mx-5 mt-4">
          <p>Showing {totalCount} pull requests in the database.</p>
          <PullsTable pulls={allPulls} />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Pulls;
