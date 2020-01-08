import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="searchbar"
          placeholder="Search"
          onChange={e => this.props.onSearchChange(this.props.dis, e)}
        ></input>
      </div>
    );
  }
}

export default Search;
