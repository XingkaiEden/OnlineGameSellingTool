import React, { Component } from "react";

class Character extends Component {
  render() {
    const { name, picURL, lvl } = this.props;
    return (
      <div className="game_pho">
        <img src={picURL} />
        <span className="font_size_14 color_333333">
          {lvl}★{name}
        </span>
      </div>
    );
  }
}

export default Character;
