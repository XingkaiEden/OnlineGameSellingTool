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
        <div>请选择游戏</div>
        {this.props.games.map((game) => (
          <Link key={game.gameName} to={`/charactersPage/${game.gameName}`}>
            {console.log(game.picUrl)}
            <Game gameName={game.gameName} gamePicUrl={game.picUrl} />
          </Link>
        ))}
      </div>
    );
  }
}

export default GamePage;
