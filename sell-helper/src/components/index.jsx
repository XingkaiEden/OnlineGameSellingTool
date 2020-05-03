import SearchBar from "./common/searchBar";
import React, { Component } from "react";
import Games from "./games";

class Index extends Component {
  state = { games: [] };
  render() {
    return (
      <div className="container">
        <SearchBar></SearchBar>
        <Games></Games>
      </div>
    );
  }
}

export default Index;
