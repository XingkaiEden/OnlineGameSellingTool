import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    return (
      <div>
        <button className="reset" onClick={this.props.onClick}>
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default Button;
