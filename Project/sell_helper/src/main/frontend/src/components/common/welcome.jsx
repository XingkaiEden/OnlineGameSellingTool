import React, { Component } from "react";

class WelcomePic extends Component {
  state = {};
  render() {
    return (
      <img
        src={require("../../components/pic/title.jpg")}
        className="container"
        style={{ width: "100%", height: "200px" }}
        alt="title image"
      ></img>
    );
  }
}

export default WelcomePic;
