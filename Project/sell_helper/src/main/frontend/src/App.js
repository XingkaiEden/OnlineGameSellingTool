import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import WelcomePic from "./components/common/welcome";
import CharactersPage from "./components/charactersPage";
import ResultPage from "./components/resultPage";
import GamePage from "./components/gamePage";
import { getGame, getGames } from "./components/services/fakeGameService";
import NavBar from "./components/common/navBar";

import SelectGame from "./components/accountadding/selectGame";
import AccountFrom from "./components/accountadding/accountFrom";
import SelectCharacters from "./components/accountadding/selectCharacters";

class App extends Component {
  state = {
    games: [],
  };

  constructor(props) {
    super(props);
    let games = getGames();
    this.state = { games };
  }
  // async componentDidMount() {
  //   //pending > resolved (seccess) OR rejected (failure)
  //   const { data: games } = await getGames();

  //   this.setState({ games });
  // }

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className="container">
          <WelcomePic />
          <Switch>
            <Route path="/selectGame" component={SelectGame} />
            <Route path="/accountForm" component={AccountFrom} />
            <Route
              path="/selectCharacters/:gameName"
              render={(props) => (
                <SelectCharacters games={this.state.games} {...props} />
              )}
            />
            <Route path="/selectCharacters" component={SelectCharacters} />

            <Route
              path="/charactersPage/:gameName"
              render={(props) => (
                <CharactersPage games={this.state.games} {...props} />
              )}
            />
            <Route path="/charactersPage/" component={CharactersPage} />

            <Route path="/resultPage" component={ResultPage} />
            <Route
              path="/"
              render={(props) => (
                <GamePage games={this.state.games} {...props} />
              )}
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
