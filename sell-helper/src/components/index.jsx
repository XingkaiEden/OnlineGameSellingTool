import SearchBar from "./common/searchBar";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Game from "./common/game";

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
    return (
      <div>
        <SearchBar></SearchBar>
        {this.state.games.map((game) => (
          <Link key={game.gameName} to={this.getSelectedGameRUL(game.gameName)}>
            <Game gameName={game.gameName} gamePicURL={game.gamePicURL} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Index;
