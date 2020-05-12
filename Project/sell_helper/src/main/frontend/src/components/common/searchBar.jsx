import React, { Component } from 'react';

class SearchBar extends Component {



    render() {
        const { onSearch, value } = this.props;
        return (<div className="form-group">

            <input
                placeholder="Search..."
                value={value}
                name="query"
                className="form-control"
                onChange={e => onSearch(e.currentTarget.value)}

            />

        </div>);
    }
}

export default SearchBar;
