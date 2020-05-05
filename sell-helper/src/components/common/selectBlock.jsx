import React, { Component } from "react";

class SelectBlock extends Component {
  state = {
    isSelect: false,
  };

  handleSelect = () => {
    const isSelect = !this.state.isSelect;
    this.setState({ isSelect });
    console.log(this.state.isSelect);
  };
  renderBlock = () => {
    if (this.state.isSelect) {
      return (
        <div
          className="server"
          style={{ background: "blue", color: "white" }}
          onClick={this.handleSelect}
        >
          {this.props.item}
        </div>
      );
    } else {
      return (
        <div className="server" onClick={this.handleSelect}>
          {this.props.item}
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderBlock()}</div>;
  }
}

export default SelectBlock;
