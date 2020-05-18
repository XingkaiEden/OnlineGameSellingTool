import React, { Component } from "react";
import { getGame, getGames } from "../services/fakeGameService";
import { Link, NavLink } from "react-router-dom";
import Game from "../common/game";
class SelectGame extends Component {
  state = {};
  constructor(props) {
    super(props);
    let games = getGames();
    this.state = { games };
  }
  render() {
    return (
      <div>
        {this.state.games.map((game) => (
          <Link key={game.gameName} to={`/selectCharacters/${game.gameName}`}>
            <Game gameName={game.gameName} gamePicURL={game.gamePicURL} />
          </Link>
        ))}
      </div>
    );
  }
}

export default SelectGame;
