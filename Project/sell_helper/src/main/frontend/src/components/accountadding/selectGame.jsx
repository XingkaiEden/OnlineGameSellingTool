import React, { Component } from "react";
import { getGame, getGames } from "../services/gameService";
import { Link, NavLink } from "react-router-dom";
import Game from "../common/game";

class SelectGame extends Component {
  state = { games: [] };

  async componentDidMount() {
    const { data: games } = await getGames();
    this.setState({ games });
  }
  render() {
    return (
      <div>
        <div>请选择要添加账号的所属游戏</div>
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
