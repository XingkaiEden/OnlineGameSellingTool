import React, { Component } from "react";
import Table from "../common/table";
import { Link } from "react-router-dom";
import auth from "../services/authService";
// We want to make a link to every titles of movies, so add a function to Title column

class AccountsTable extends Component {
  columns = [
    {
      path: "id",
      label: "ID",
      content: (account) => (
        <Link to={`/movies/${account._id}`}>{account._id}</Link>
      ),
    },
    { path: "gameName", label: "游戏名" },
    { path: "serverName", label: "服务器" },
  ];
  deleteColumn = {
    key: "delete",
    content: (account) => (
      <button
        onClick={() => this.props.onDelete(account)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();
    const user = auth.getCurrentUserJWT();
    if (user) this.columns.push(this.deleteColumn);
  }

  render() {
    const { accounts, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={accounts}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default AccountsTable;
