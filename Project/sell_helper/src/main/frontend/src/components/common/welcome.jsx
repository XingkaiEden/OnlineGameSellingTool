import React, { Component } from "react";

class WelcomePic extends Component {
  state = {};
  render() {
    return (
      // <img
      //   src={require("../../components/pic/title.jpg")}
      //   className="container"
      //   style={{ width: "100%", height: "200px" }}
      //   alt="title image"
      // ></img>

      <div className="jumbotron jumbotron-fluid jumbotron-custom">
        <div className="container">
          <h1 className="display-4">
            选择喜欢的游戏，然后选择想要的角色，最后把账号告诉我们!
          </h1>
          <p className="lead">
            Choose an account with a desired set of characters in a specific
            game!
          </p>
        </div>
      </div>
    );
  }
}

export default WelcomePic;
