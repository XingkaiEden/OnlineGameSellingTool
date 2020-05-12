import SearchBar from "./common/searchBar";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Game from "./common/game";

class GamePage extends Component {
  state = {
    games: [],
  };

  render() {
    return (
      <div>
        {/* <SearchBar></SearchBar> */}
        {this.props.games.map((game) => (
          <Link key={game.gameName} to={`/charactersPage/${game.gameName}`}>
            <Game gameName={game.gameName} gamePicURL={game.gamePicURL} />
          </Link>
        ))}
      </div>
    );
  }
}

export default GamePage;
