import React, { Component } from "react";

class unselectBox extends Component {
  state = {};
  render() {
    const { item, onSelectBox } = this.props;
    return (
      <div className="server" onClick={() => onSelectBox(this.props.item)}>
        {item}
      </div>
    );
  }
}

export default unselectBox;
