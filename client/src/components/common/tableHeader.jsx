import React from "react";

class TableHeader extends React.Component {
  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th style={{ textAlign: "center" }} key={column.path || column.key}>
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
