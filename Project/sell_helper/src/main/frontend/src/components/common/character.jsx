import React, { Component } from "react";
const images = require.context("../pic/山海镜花", true);
class Character extends Component {
  state = {
    isChecked: false,
  };

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  conditionalRender = () => {
    const { picURL, lvl, name, onSelect, selectable } = this.props;
    let img_src = images(`./${name}.png`);
    if (selectable)
      return (
        <div className="test">
          <img src={img_src} onChange={this.toggleChange} />
          <input
            type="checkbox"
            className="input"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
            onClick={() => onSelect(lvl, name)}
            id="checkID"
          />
          <label htmlFor="checkID"></label>
          <span className="font_size_14">{name}</span>
        </div>
      );
    else
      return (
        <div className="game_pho">
          <img src={img_src} />
          <span className="font_size_14">{name}</span>
        </div>
      );
  };
  render() {
    return <div>{this.conditionalRender()}</div>;
  }
}

export default Character;
