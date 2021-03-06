import React from "react";
import Form from "../../common/form";
import Joi from "joi-browser";
import { saveAccount } from "../../services/accountsService";
import { getTempStorage } from "../../services/tempserver";
import { password } from "../../../password.json";
// let counter = 1;
class AccountFrom extends Form {
  state = {
    data: { _id: "", gameName: "", serverName: "", characters: [] },
    error: {},
  };
  constructor(props) {
    super(props);
    const gameName = getTempStorage().currentGameName;
    const characters = getTempStorage().selectedCharacters;

    this.state = {
      data: { _id: "", gameName, serverName: "", characters },
      error: {},
    };
  }

  schema = {
    _id: Joi.number().required().label("账号ID"),
    serverName: Joi.string().required().label("所属服务器"),
    gameName: Joi.string(),
    characters: Joi.array(),
  };

  doSubmit = async () => {
    //在这里处理表格提交
    console.log(this.state.data); //test
    // await saveMovie(this.state.data);

    // console.log(this.state.data)

    await saveAccount(this.state.data);

    this.props.history.push("/accounts");
    // this.props.history.push("/" + password);
  };

  render() {
    const currentGame = this.props.games.filter(
      (g) => g.gameName === this.state.data.gameName
    );
    const servers = [];
    currentGame[0].serverName.map((s) => {
      servers.push(s.name);
    });
    // counter++;
    return (
      // counter > 2 && (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("_id", "账号ID")}

          {this.renderSelectInput("serverName", "所属服务器", servers)}
          {this.renderButton("保存")}
        </form>
      </div>
    );
  }
}

export default AccountFrom;
