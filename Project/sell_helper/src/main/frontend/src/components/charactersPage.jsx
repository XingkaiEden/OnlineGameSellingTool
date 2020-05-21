import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./common/button";
import Character from "./common/character";

import SelectBox from "./common/selectBox";
import UnselectBox from "./common/unselectBox";
import { setSelectedAccounts } from "./services/selectedDataService";
import {
  setSelectedServerName,
  clearSelectedAccounts,
  clearSelectedServer,
} from "./services/selectedDataService";
import { getAccounts } from "./services/accountsService";
class CharactersPage extends Component {
  state = {};

  constructor(props) {
    super(props);
    const currentGameName = this.props.match.params.gameName;

    this.state = {
      games: [],
      selectedCharacters: [],
      selectedServer: "",
      currentGameName,
    };
  }

  // async componentDidMount() {
  //   const { data: games } = await getGames();
  //   this.setState({ games });
  // }

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
    //do nothing
  };

  handleSearch = async () => {
    //clear selected account table in database first
    const { data: ac } = await clearSelectedAccounts();
    const { data: sc } = await clearSelectedServer();
    console.log("status:", ac, sc);
    //handle selected characters, put them into server
    const characterList = [...this.state.selectedCharacters];
    const serverName = this.state.selectedServer;
    const gameName = this.props.match.params.gameName;
    if (serverName === "") {
      await setSelectedServerName("noserver");
      return window.location.assign("/resultPage");
    } else await setSelectedServerName(serverName);
    if (characterList.length === 0)
      return window.location.assign("/resultPage");
    const { data: searchedAccounts } = await getAccounts(
      gameName,
      serverName,
      characterList
    );
    if (searchedAccounts) {
      console.log(this.state);
      await setSelectedAccounts(searchedAccounts);
    }
    return window.location.assign("/resultPage");
  };
  render() {
    const currentGameIdx = this.getCurrentGameNameIdx(
      this.state.currentGameName
    );
    // console.log(this.state);
    return (
      <div>
        <span>
          <span>游戏区服</span>
          {this.props.games[currentGameIdx].serverName.map((server) =>
            this.renderBox(server.name)
          )}
        </span>
        <ul>
          <div className="game_img ">
            {this.props.games[currentGameIdx].characters.map((character) => (
              <li className="inline" key={character.name}>
                <Character
                  onSelect={this.handleSelect}
                  name={character.name}
                  lvl={character.lvl}
                  picURL={character.picURL}
                  selectable={true}
                />
              </li>
            ))}
          </div>
        </ul>

        <Link to="/">
          <Button value="重置" onClick={this.handleReset} />
        </Link>

        <Button value="搜索" onClick={this.handleSearch} />
      </div>
    );
  }
}

export default CharactersPage;
