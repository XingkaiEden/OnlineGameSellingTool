import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    return (
      <div>
        <button className="btn btn-secondary">{this.props.value}</button>
      </div>
    );
  }
}

export default Button;
