import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SearchBar from "./components/common/searchBar";
import Index from "./components";
import WelcomePic from "./components/common/welcome";

function App() {
  return (
    <React.Fragment>
      <WelcomePic />
      <Index />
    </React.Fragment>
  );
}

export default App;
