import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import WelcomePic from "./components/common/welcome";
import CharactersPage from "./components/charactersPage";
import ResultPage from "./components/resultPage";
import GamePage from "./components/gamePage";
import { getGame, getGames } from "./components/services/fakeGameService";
class App extends Component {
  state = {};

  constructor(props) {
    super(props);
    let games = getGames();
    this.state = { games };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <WelcomePic />
          <Switch>
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
