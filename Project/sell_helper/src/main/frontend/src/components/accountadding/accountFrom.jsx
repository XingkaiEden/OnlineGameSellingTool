import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { saveAccount } from "../services/fakeAccountsService";
import { getTempStorage } from "../services/tempserver";

class AccountFrom extends Form {
  state = {
    data: { _id: "", gameName: "", serverName: "", characters: [] },
    error: {},
  };

  componentDidMount() {
    const gameName = getTempStorage().currentGameName;
    const characters = getTempStorage().selectedCharacters;
    this.setState({
      data: {
        _id: "",
        gameName: gameName,
        serverName: "",
        characters: characters,
      },
    });
  }
  schema = {
    _id: Joi.number(),
    serverName: Joi.string().required().label("所属服务器"),
  };
  doSubmit = async () => {
    //在这里处理表格提交
    console.log(this.state.data); //test
    // await saveMovie(this.state.data);
    // this.props.history.push("/movies");
    // console.log(this.state.data)

    saveAccount(this.state.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("_id", "账号ID")}

          {this.renderInput("serverName", "所属服务器")}
          {this.renderButton("保存")}
        </form>
      </div>
    );
  }
}

export default AccountFrom;
