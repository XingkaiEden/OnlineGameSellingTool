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
  getSelectedAccounts,
} from "./services/selectedDataService";
import { setServer, setTempStoreage } from "./services/tempserver";
import { getAccounts } from "./services/accountsService";
import { getGames } from "./services/gameService";
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
    //handle selected characters, put them into server
    const characterList = [...this.state.selectedCharacters];
    const server = this.state.selectedServer;
    const gameName = this.props.match.params.gameName;
    if (server === "") setServer(false);
    else setServer(true);
    const { data: searchedAccounts } = await getAccounts(
      gameName,
      server,
      characterList
    );
    console.log(searchedAccounts);
    if (searchedAccounts) {
      await setSelectedAccounts(searchedAccounts);
      const { data: accounts } = await getSelectedAccounts();
      this.props.tempStore(accounts);
    }
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

        <Link to="/resultPage">
          <Button value="搜索" onClick={this.handleSearch} />
        </Link>
      </div>
    );
  }
}

export default CharactersPage;
