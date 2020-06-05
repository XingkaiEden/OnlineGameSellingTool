import React, { Component } from "react";
import AccountsTable from "./accountsTable";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { Link } from "react-router-dom";
import { getAllAccounts, deleteAccount } from "../services/accountsService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBar from "../common/searchBar";
import { toast } from "react-toastify";

class Accounts extends Component {
  state = {
    accounts: [],

    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
  };

  async componentDidMount() {
    const { data: accounts } = await getAllAccounts();
    this.setState({ accounts });
  }

  handleDelete = async (account) => {
    const originalAccounts = this.state.accounts;
    const accounts = originalAccounts.filter((m) => m._id !== account._id);
    this.setState({ accounts });
    try {
      await deleteAccount(account._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) console.log("x");
      toast.error("This movie has already been deleted.");

      this.setState({ accounts: originalAccounts });
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  // handleGenreSelect = (genre) => {
  //   this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  // };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleSearch = (qurey) => {
    this.setState({ searchQuery: qurey, currentPage: 1 });
    // this.setState({ searchQuery: qurey, selectedGenre: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      accounts: allAccounts,
    } = this.state;
    let filtered = allAccounts;

    if (searchQuery) {
      filtered = allAccounts.filter((m) =>
        m._id.toString().toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    // else if (selectedGenre && selectedGenre._id) {
    //   filtered = allAccounts.filter((m) => m.genre._id === selectedGenre._id);
    // }
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const accounts = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: accounts };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, data: accounts } = this.getPagedData();
    const { user } = this.props;
    return (
      <div className="row">
        {/* <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div> */}
        <div className="col">
          {user && (
            <Link className="btn btn-primary" to="/accounts/new">
              New Account
            </Link>
          )}
          <p>目前数据库里有 {totalCount} 个所选账号</p>
          <p>Showing {totalCount} accounts in the database.</p>

          <SearchBar
            value={searchQuery}
            onSearch={this.handleSearch}
          ></SearchBar>
          <AccountsTable
            accounts={accounts}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Accounts;
