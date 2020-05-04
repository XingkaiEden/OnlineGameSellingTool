import React, { Component } from "react";
import SearchBar from "./common/searchBar";

import Button from "./common/button";
import Character from "./common/character";
class CharactersPage extends Component {
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
        gameName: "山海镜花",
        gamePicURL: require("./pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        servers: ["苹果", "安卓"],
        characters: [],
      },
    ],
  };
  getCurrentGameName = (currentGameName) => {
    let result,
      counter = 0;
    this.state.games.forEach((element) => {
      if (element.gameName === currentGameName) result = counter;
      else counter += 1;
    });
    return result;
  };
  createKey = (a, b) => {
    return a + b;
  };
  render() {
    const currentGame = this.props.match.params.gameName;
    const currentGameIdx = this.getCurrentGameName(currentGame);
    return (
      <div>
        <form action="" className="form-inline">
          <SearchBar className=""></SearchBar>
          <SearchBar></SearchBar>
        </form>
        <span>
          游戏区服
          {currentGameIdx}
          {this.state.games[currentGameIdx].servers.map((server) => (
            <span key={server}>{server}</span>
          ))}
        </span>

        {this.state.games[currentGameIdx].characters.map((character) => (
          <Character
            key={character.name}
            name={character.name}
            lvl={character.lvl}
            picURL={character.picURL}
          />
        ))}

        <Button value="重置" />
        <Button value="搜索" />
      </div>
    );
  }
}

export default CharactersPage;
