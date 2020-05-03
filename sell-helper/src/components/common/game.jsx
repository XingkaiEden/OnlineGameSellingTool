import React, { Component } from "react";
import styles from "../css/style.css";

class Game extends Component {
  state = {
    name: "公主链接",
    picURL: require("../pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
  };
  render() {
    return (
      <div className="game_pho float_left">
        <img src={this.state.picURL} />
        <span className="font_size_14 color_333333">{this.state.name}</span>
      </div>
    );
  }
}

export default Game;
