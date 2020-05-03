import React, { Component } from "react";
import SearchBar from "./common/searchBar";
import { Link, NavLink } from "react-router-dom";
import Game from "./common/game";
class GamePage extends Component {
  state = {
    games: [],
  };
  getSelectedGameRUL = (gameName) => {
    return "/charactersPage/" + gameName;
  };
  render() {
    this.setState((state, props) => ({
      games: state.games + props.games,
    }));
    return (
      <div>
        <SearchBar></SearchBar>
        {games.map((game) => (
          <Link key={game.gameName} to={this.getSelectedGameRUL(game.gameName)}>
            <Game gameName={game.gameName} gamePicURL={game.gamePicURL} />
          </Link>
        ))}
      </div>
    );
  }
}

export default GamePage;
