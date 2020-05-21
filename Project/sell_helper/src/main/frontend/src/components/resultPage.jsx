import React, { Component } from "react";
import InfoBar from "./common/infoBar";
import Character from "./common/character";
import { getSelectedAccounts } from "./services/selectedDataService";
import { getSelectedServerName } from "./services/selectedDataService";
let counter = 1;
class ResultPage extends Component {
  state = {};

  constructor(props) {
    super(props);
    // const accounts = this.props.selectedAccounts;

    this.state = { accounts: [], SelectedServerName: "" };
  }
  async componentDidMount() {
    const { data: accounts } = await getSelectedAccounts();
    const { data: SelectedServerName } = await getSelectedServerName();
    console.log("I GOT THE DATA!", accounts, SelectedServerName);
    this.setState({ accounts, SelectedServerName });
    console.log("state outside render", this.state);
  }

  // highLvlCharsCounter = (account) => {
  //   let counter = 0;
  //   account.characters.map((c) => {
  //     if (c.lvl === 3) counter += 1;
  //   });

  //   return counter;
  // };
  conditionalRender = () => {
    const { accounts, SelectedServerName } = this.state;
    if (SelectedServerName === "noserver=") {
      return <span>请选择服务器</span>;
    } else if (accounts.length === 0) {
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
                    server={account.serverName}
                    // highLvlChars={this.highLvlCharsCounter(account)}
                  />

                  <div className="game-img jusc_start display_flex">
                    {account.characters.map((character) => (
                      <Character
                        key={character.name}
                        name={character.name}
                        // picURL={character.picURL}
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
    counter++;

    console.log("state inside render", this.state);

    return (
      counter > 3 && (
        <div>
          {console.log("counter:" + counter)}
          {this.conditionalRender()}
        </div>
      )
    );
  }
}

export default ResultPage;
