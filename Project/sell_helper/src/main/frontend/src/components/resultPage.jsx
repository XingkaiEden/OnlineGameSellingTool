import React, { Component } from "react";
import InfoBar from "./common/infoBar";
import Character from "./common/character";
import {
  getSelectedAccounts,
  getServer,
} from "./services/fakeSelectedDataService";

class ResultPage extends Component {
  state = {};
  constructor(props) {
    super(props);
    const accounts = getSelectedAccounts();
    const server = getServer();
    this.state = { accounts, server };
  }

  highLvlCharsCounter = (account) => {
    let counter = 0;
    account.characters.map((c) => {
      if (c.lvl === 3) counter += 1;
    });

    return counter;
  };
  conditionalRender = () => {
    const { accounts } = this.state;
    if (!this.state.server) {
      return <span>请选择服务器</span>;
    } else if (this.state.accounts.length === 0) {
      return <span>无查询结果</span>;
    } else {
      return (
        <div>
          <div className="header">
            <nav className="navbar"></nav>
          </div>
          <div className="head">
            <p></p>
            <span>{accounts[0].gameName}</span>
          </div>
          <div className="feed container">
            <div className="accounts">
              {accounts.map((account) => (
                <div key={account._id} className="">
                  <InfoBar
                    accountNO={account._id}
                    server={account.server}
                    highLvlChars={this.highLvlCharsCounter(account)}
                  />

                  <div className="game-img jusc_start display_flex">
                    {account.characters.map((character) => (
                      <Character
                        key={character.name}
                        name={character.name}
                        picURL={character.picURL}
                        lvl={character.lvl}
                        selectable={false}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    return <div>{this.conditionalRender()}</div>;
  }
}

export default ResultPage;
