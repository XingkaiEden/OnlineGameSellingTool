import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Index from "./components";

import CharactersPage from "./components/charactersPage";
import gamePage from "./components/gamePage";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/charactersPage" component={CharactersPage} />
        <Route path="/" component={gamePage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
