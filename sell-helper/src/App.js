import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import WelcomePic from "./components/common/welcome";
import CharactersPage from "./components/charactersPage";
import ResultPage from "./components/resultPage";
import GamePage from "./components/gamePage";

class App extends Component {
  state = {
    games: [
      {
        gameName: "公主链接",
        gamePicURL: require("./components/pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        servers: ["苹果", "安卓"],
        characters: [
          {
            name: "公主链接",
            picURL: require("./components/pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
            lvl: 0,
          },
          {
            name: "公主链接2",
            picURL: require("./components/pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
            lvl: 0,
          },
          {
            name: "公主链接3ß",
            picURL: require("./components/pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
            lvl: 0,
          },
        ],
      },
      {
        gameName: "山海镜花",
        gamePicURL: require("./components/pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
        servers: ["苹果", "安卓"],
        characters: [],
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
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
            render={(props) => <GamePage games={this.state.games} {...props} />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
