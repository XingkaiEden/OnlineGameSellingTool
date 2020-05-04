import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import WelcomePic from "./components/common/welcome";
import CharactersPage from "./components/charactersPage";
import ResultPage from "./components/resultPage";
import GamePage from "./components/gamePage";

function App() {
  return (
    <React.Fragment>
      <WelcomePic />
      <Switch>
        <Route path="/charactersPage/:gameName?" component={CharactersPage} />
        <Route path="/charactersPage" component={CharactersPage} />

        <Route path="/resultPage" component={ResultPage} />
        <Route path="/" component={GamePage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
