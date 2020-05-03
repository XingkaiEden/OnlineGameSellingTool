import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class Game extends Component {
  render() {
    const { gamePicURL, gameName } = this.props;
    return (
      <div className="game_pho float_left">
        <img src={gamePicURL} />
        <span className="font_size_14 color_333333">{gameName}</span>
      </div>
    );
  }
}

export default Game;
