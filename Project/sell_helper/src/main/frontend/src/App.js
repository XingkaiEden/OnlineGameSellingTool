import React, { Component } from "react";

import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";
import WelcomePic from "./components/common/welcome";
import CharactersPage from "./components/charactersPage";
import ResultPage from "./components/resultPage";
import GamePage from "./components/gamePage";
import { getGames } from "./components/services/gameService";

import NavBar from "./components/common/navBar";
import auth from "./components/services/authService";
import SelectGame from "./components/sellerManagmentSystem/accountadding/selectGame";
import AccountFrom from "./components/sellerManagmentSystem/accountadding/accountFrom";
import SelectCharacters from "./components/sellerManagmentSystem/accountadding/selectCharacters";
import { password } from "./password.json";
import Accounts from "./components/sellerManagmentSystem/accounts";
import LoginForm from "./components/sellerManagmentSystem/loginForm";
import Logout from "./components/sellerManagmentSystem/logout";
let counter = 1;
class App extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      games: [],
    };
  }
  async componentDidMount() {
    //pending > resolved (seccess) OR rejected (failure)
    const { data: games } = await getGames();
    const user = auth.getCurrentUserJWT();

    this.setState({ games, user });
  }

  render() {
    // console.log(this.state);
    const { user } = this.state;
    counter++;
    return (
      counter > 2 && (
        <React.Fragment>
          <NavBar user={user} />
          <div className="container">
            <WelcomePic />
            <Switch>
              {/* <Route path={`/${password}`} component={SelectGame} /> */}
              <Route path="/accounts/new" component={SelectGame} />
              <Route path="/login" component={LoginForm} />
              <Route path="/logout" component={Logout} />

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
                  <CharactersPage games={this.state.games} {...props} />
                )}
              />
              <Route path="/charactersPage/" component={CharactersPage} />

              <Route path="/resultPage" component={ResultPage} />
              <Route
                path="/accounts"
                render={(props) => (
                  <Accounts {...props} user={this.state.user}></Accounts>
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
