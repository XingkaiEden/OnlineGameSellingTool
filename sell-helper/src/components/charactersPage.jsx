import React, { Component } from "react";
import SearchBar from "./common/searchBar";

import Button from "./common/button";
import Character from "./common/character";
class CharactersPage extends Component {
  state = {
    games: [],
  };

  getCurrentGameName = (currentGameName) => {
    let result,
      counter = 0;
    this.props.games.forEach((element) => {
      if (element.gameName === currentGameName) result = counter;
      else counter += 1;
    });
    return result;
  };
  render() {
    const currentGameIdx = this.getCurrentGameName(
      this.props.match.params.gameName
    );
    return (
      <div>
        <form action="" className="form-inline">
          <SearchBar className=""></SearchBar>
          <SearchBar></SearchBar>
        </form>
        <span>
          游戏区服
          {this.props.games[currentGameIdx].servers.map((server) => (
            <span key={server}>{server}</span>
          ))}
        </span>
        {this.props.games[currentGameIdx].characters.map((character) => (
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
