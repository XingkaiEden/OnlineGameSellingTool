import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { onSearch, value } = this.props;
    return (
      <div>
        <input
          placeholder="Search..."
          value={value}
          name="query"
          onChange={(e) => onSearch(e.currentTarget.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
