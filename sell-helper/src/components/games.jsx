import React, { Component } from "react";
import Game from "./common/game.jsx";

class Games extends Component {
  state = {};
  render() {
    return (
      <div className="game_img jusc_start display_flex van-list">
        <Game></Game>
        <Game></Game>
        <Game></Game>
        <Game></Game>
      </div>
    );
  }
}

export default Games;
