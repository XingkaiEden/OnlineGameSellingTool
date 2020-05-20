import React, { Component } from "react";
import InfoBar from "./common/infoBar";
import Character from "./common/character";
import { getSelectedAccounts } from "./services/selectedDataService";
import { getServer, getTempStorage } from "./services/tempserver";
let counter = 1;
class ResultPage extends Component {
  state = {};

  constructor(props) {
    super(props);
    // const accounts = this.props.selectedAccounts;
    const serverName = getServer();
    this.state = { accounts: [], serverName };
  }
  async componentDidMount() {
    const { data: accounts } = await getSelectedAccounts();
    this.setState({ accounts });
  }

  // highLvlCharsCounter = (account) => {
  //   let counter = 0;
  //   account.characters.map((c) => {
  //     if (c.lvl === 3) counter += 1;
  //   });

  //   return counter;
  // };
  conditionalRender = () => {
    const { accounts } = this.state;
    if (!this.state.serverName) {
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
                    {console.log(account)}
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
    {
      console.log(this.state.accounts);
    }
    return counter > 2 && <div>{this.conditionalRender()}</div>;
  }
}

export default ResultPage;
