import React, { Component } from "react";

class InfoBar extends Component {
  render() {
    const { accountNO, server, highLvlChars } = this.props;
    return (
      <div className="info display_flex jusc_around">
        <span>编号： {accountNO}</span>
        <span>服务器： {server}</span>
        <span>3星： {highLvlChars}</span>
      </div>
    );
  }
}

export default InfoBar;
