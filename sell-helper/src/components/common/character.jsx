import React, { Component } from "react";

class Character extends Component {
  state = {
    name: "",
    picURL: "",
    lvl: 0,
  };
  render() {
    return (
      <div>
        <img src={this.state.picURL} />
        {this.state.lvl}★{this.state.name}
      </div>
    );
  }
}

export default Character;
