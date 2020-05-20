import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import WelcomePic from "./components/common/welcome";
import CharactersPage from "./components/charactersPage";
import ResultPage from "./components/resultPage";
import GamePage from "./components/gamePage";
import { getGame, getGames } from "./components/services/gameService";
import { getSelectedAccounts } from "./components/services/selectedDataService";
import NavBar from "./components/common/navBar";

import SelectGame from "./components/accountadding/selectGame";
import AccountFrom from "./components/accountadding/accountFrom";
import SelectCharacters from "./components/accountadding/selectCharacters";
import { password } from "./password.json";
let counter = 1;
class App extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      games: [],
    };
  }
  async componentWillMount() {
    //pending > resolved (seccess) OR rejected (failure)
    const { data: games } = await getGames();

    this.setState({ games });
  }
  selectedAccountsTempStrage = (accounts) => {
    this.setState({ accounts });
  };
  render() {
    console.log(this.state);
    counter++;
    return (
      counter > 2 && (
        <React.Fragment>
          <NavBar></NavBar>
          <div className="container">
            <WelcomePic />
            <Switch>
              <Route path={`/${password}`} component={SelectGame} />
              <Route
                path="/accountForm"
                render={(props) => (
                  <AccountFrom games={this.state.games} {...props} />
                )}
              />
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
                  <CharactersPage
                    games={this.state.games}
                    tempStore={this.selectedAccountsTempStrage}
                    {...props}
                  />
                )}
              />
              <Route path="/charactersPage/" component={CharactersPage} />

              <Route
                path="/resultPage"
                render={(props) => (
                  <ResultPage
                    selectedAccounts={this.state.accounts}
                    {...props}
                  />
                )}
              />
              <Route
                path="/"
                render={(props) => (
                  <GamePage games={this.state.games} {...props} />
                )}
              />
            </Switch>
          </div>
        </React.Fragment>
      )
    );
  }
}

export default App;
