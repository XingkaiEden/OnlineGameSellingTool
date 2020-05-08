import React, { Component } from "react";
import SearchBar from "./common/searchBar";
import { Link, NavLink } from "react-router-dom";
import Button from "./common/button";
import Character from "./common/character";
import SelectBlock from "./common/selectBlock";
import SelectBox from "./common/selectBox";
import UnselectBox from "./common/unselectBox";
import {
  setSelectedAccounts,
  setServer,
} from "./services/fakeSelectedDataService";
import { getAccounts } from "./services/fakeAccountsService";
class CharactersPage extends Component {
  state = {};

  constructor(props) {
    super(props);
    const currentGameName = this.props.match.params.gameName;
    this.state = {
      selectedCharacters: [],
      selectedServer: "",
      currentGameName,
    };
  }

  getCurrentGameNameIdx = (currentGameName) => {
    let result,
      counter = 0;
    this.props.games.forEach((element) => {
      if (element.gameName === currentGameName) result = counter;
      else counter += 1;
    });
    return result;
  };
  isDuplicateCharacter = (nName) => {
    const selectedCharacters = [...this.state.selectedCharacters];

    return selectedCharacters.find(({ name }) => name === nName);
  };
  handleSelect = (lvl, name) => {
    //first click, add it to state, second click, delete it from state.
    //check if this character has been in state
    const newCharacter = this.isDuplicateCharacter(name);
    if (!newCharacter) {
      const selectedCharacters = [
        ...this.state.selectedCharacters,
        { name: name, lvl: lvl },
      ];
      this.setState({ selectedCharacters });
    } else {
      //it is duplicate character, delete it from state
      const selectedCharacters = [...this.state.selectedCharacters].filter(
        (c) => !(c.name === name && c.lvl === lvl)
      );
      this.setState({ selectedCharacters });
    }
  };
  handleSelectBox = (serverName) => {
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

  handleReset = () => {
    window.location.reload();
  };

  handleSearch = () => {
    //handle selected characters, put them into server
    const characterList = [...this.state.selectedCharacters];
    const server = this.state.selectedServer;
    const gameName = this.props.match.params.gameName;
    if (server === "") setServer(false);
    else setServer(true);
    const searchedAccounts = getAccounts(gameName, server, characterList);
    setSelectedAccounts(searchedAccounts);
  };
  render() {
    const currentGameIdx = this.getCurrentGameNameIdx(
      this.state.currentGameName
    );

    return (
      <div>
        {/* <form action="" className="form-inline">
          <SearchBar className=""></SearchBar>
          <SearchBar></SearchBar>
        </form> */}
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
            selectable={true}
          />
        ))}

        <Button value="重置" onClick={this.handleReset} />

        <Link to="/resultPage">
          <Button value="搜索" onClick={this.handleSearch} />
        </Link>
      </div>
    );
  }
}

export default CharactersPage;
