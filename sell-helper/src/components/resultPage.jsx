import React, { Component } from "react";
import InfoBar from "./common/inforBar";
import Character from "./common/character";

class ResultPage extends Component {
  state = {
    gameName: "公主链接",
    accounts: [
      {
        accountNO: 1,
        server: "真亲",
        highLvlChars: 9,
        characters: [
          {
            name: "公主链接",
            picURL: require("./pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
            lvl: 3,
          },
        ],
      },

      {
        accountNO: 6,
        server: "真亲",
        highLvlChars: 94,
        characters: [
          {
            name: "公主链接",
            picURL: require("./pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
            lvl: 0,
          },
          {
            name: "公主链接",
            picURL: require("./pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
            lvl: 0,
          },
          {
            name: "公主链接",
            picURL: require("./pic/characterPic/fe52a0c185314b9781eb030800b15156.png"),
            lvl: 0,
          },
        ],
      },
    ],
  };
  render() {
    const { accounts, gameName } = this.state;
    return (
      <div>
        <div className="header">
          <nav className="navbar"></nav>
        </div>
        <div className="feed">
          <div className="game_name">
            <span>{gameName}</span>
            <div className="accounts">
              {accounts.map((account) => (
                <div className="container">
                  <InfoBar
                    key={account.accountNO}
                    accountNO={account.accountNO}
                    server={account.server}
                    highLvlChars={account.highLvlChars}
                  />

                  {account.characters.map((character) => (
                    <Character
                      key={character.name}
                      name={character.name}
                      picURL={character.picURL}
                      lvl={character.lvl}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultPage;
