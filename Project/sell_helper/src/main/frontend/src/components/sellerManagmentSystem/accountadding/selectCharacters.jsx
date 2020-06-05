import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom";
import Button from "../../common/button";
import Character from "../../common/character";
import Form from "../../common/form";
import { setTempStoreage } from "../../services/tempserver";

class SelectCharacters extends Form {
  state = {};
  schema = {};
  constructor(props) {
    super(props);
    const currentGameName = this.props.match.params.gameName;

    this.state = {
      selectedCharacters: [],
      games: [],
      currentGameName,
    };
  }

  /************************************ */
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
  /******************************** */
  handleReset = () => {
    //do nothing
  };

  handleSearch = () => {
    //store current game name and selected characters into some where
    setTempStoreage(this.state);
  };
  render() {
    const currentGameIdx = this.getCurrentGameNameIdx(
      this.state.currentGameName
    );
    return (
      <div>
        <ul>
          {this.props.games[currentGameIdx].characters.map((character) => (
            <li key={character.name}>
              <Character
                onSelect={this.handleSelect}
                name={character.name}
                lvl={character.lvl}
                picURL={character.picURL}
                selectable={true}
              />
            </li>
          ))}
        </ul>

        <Button value="重置" onClick={this.handleReset} />

        <Link to={`/accountForm`}>
          <Button value="保存" onClick={this.handleSearch} />
        </Link>
      </div>
    );
  }
}

export default SelectCharacters;
