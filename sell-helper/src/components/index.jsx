import React, { Component } from "react";
import Games from "./games";

class Index extends Component {
  state = { games: [] };
  render() {
    const { games } = this.state;
    return (
      <div className="container">
        <SearchBar></SearchBar>
        <Games></Games>
      </div>
    );
  }
}

export default Index;
