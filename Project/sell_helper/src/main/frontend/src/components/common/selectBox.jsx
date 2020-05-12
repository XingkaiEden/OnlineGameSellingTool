import React, { Component } from "react";

class SelectBox extends Component {
  state = {};
  render() {
    const { item, onSelectBox } = this.props;
    return (
      <div
        className="server"
        style={{ background: "blue", color: "white" }}
        onClick={() => onSelectBox(this.props.item)}
      >
        {item}
      </div>
    );
  }
}

export default SelectBox;
