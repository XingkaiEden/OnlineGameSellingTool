import React, { Component } from "react";

class Character extends Component {
  state = {};
  render() {
    const { picURL, lvl, name } = this.props;
    return (
      <div className="game_pho float_left">
        <img src={picURL} />
        {lvl}★{name}
      </div>
    );
  }
}

export default Character;
