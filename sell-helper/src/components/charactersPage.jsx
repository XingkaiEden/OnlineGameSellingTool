import React, { Component } from "react";
import SearchBar from "./common/searchBar";
import { Link, NavLink } from "react-router-dom";
import Button from "./common/button";
import Character from "./common/character";
import SelectBlock from "./common/selectBlock";
import SelectBox from "./common/selectBox";
import UnselectBox from "./common/unselectBox";
class CharactersPage extends Component {
  state = {
    selectedCharacters: [],
    selectedServer: "",
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
  handleSelect = (lvl, name) => {
    //change image so that the user could know img has been selected

    const selectedCharacters = [
      ...this.state.selectedCharacters,
      { name: name, lvl: lvl },
    ];
    this.setState({ selectedCharacters });
  };
  handleSelectBox = (serverName) => {
    console.log(serverName);
    this.setState({ selectedServer: serverName });
  };

  renderBox = (server) => {
    if (server === this.state.selectedServer) {
      return (
        <SelectBox
          key={server}
          item={server}
          onSelectBox={this.handleSelectBox}
        />
      );
    } else {
      return (
        <UnselectBox
          key={server}
          item={server}
          onSelectBox={this.handleSelectBox}
        />
      );
    }
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
          <span>游戏区服</span>
          {this.props.games[currentGameIdx].servers.map((server) =>
            this.renderBox(server)
          )}
        </span>
        {this.props.games[currentGameIdx].characters.map((character) => (
          <Character
            key={character.name}
            onSelect={this.handleSelect}
            name={character.name}
            lvl={character.lvl}
            picURL={character.picURL}
          />
        ))}

        <Button value="重置" />
        <Button value="搜索" />
        {console.log(this.state.selectedCharacters)}
      </div>
    );
  }
}

export default CharactersPage;
