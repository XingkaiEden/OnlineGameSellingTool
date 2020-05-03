import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Index from "./components";
import WelcomePic from "./components/common/welcome";
import CharactersPage from "./components/charactersPage";

function App() {
  return (
    <React.Fragment>
      <WelcomePic />
      <Switch>
        <Route path="/charactersPage" component={CharactersPage} />
        <Route path="/" component={Index} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
