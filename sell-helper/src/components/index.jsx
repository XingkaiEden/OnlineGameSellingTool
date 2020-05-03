import React, { Component } from "react";
import WelcomePic from "./common/welcome";
import GamePage from "./gamePage";
import CharactersPage from "./charactersPage";

class Index extends Component {
  state = {
    games: [
      {
        gameName: "公主链接",
        gamePicURL: require("./pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        servers: ["苹果", "安卓"],
        characters: [
          {
            name: "公主链接",
            picURL: require("./pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
            lvl: 0,
          },
          {
            name: "公主链接2",
            picURL: require("./pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
            lvl: 0,
          },
          {
            name: "公主链接3ß",
            picURL: require("./pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
            lvl: 0,
          },
        ],
      },
      {
        gameName: "anye",
        gamePicURL: require("./pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        servers: ["苹果", "安卓"],
        characters: [],
      },
    ],
  };
  getSelectedGameRUL = (gameName) => {
    return "/charactersPage/" + gameName;
  };
  render() {
    const { games } = this.state;
    return (
      <div>
        <WelcomePic />
        <GamePage games={games[0]} />
        <CharactersPage games={games} />
      </div>
    );
  }
}

export default Index;
