import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, data }) => {
  return (
    <div className="table-responsive-xl">
      <table
        id="pull-requests"
        className="table table-stripped table-hover align-middle"
      >
        <TableHeader columns={columns} />
        <TableBody data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
