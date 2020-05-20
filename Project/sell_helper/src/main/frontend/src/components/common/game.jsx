import React, { Component } from "react";
const images = require.context("../pic", true);
class Game extends Component {
  render() {
    const { gamePicUrl, gameName } = this.props;

    let img_src = images(`./${gameName}.png`);
    return (
      <div className="game_pho float_left">
        <img src={img_src} />
        <span className="font_size_14 color_333333">{gameName}</span>
      </div>
    );
  }
}

export default Game;
