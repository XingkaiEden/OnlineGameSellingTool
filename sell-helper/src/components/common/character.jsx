import React, { Component } from "react";

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
    if (this.props.selectable)
      return (
        <div className="game_pho">
          <img src={picURL} />
          <input
            type="checkbox"
            className="input"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
            onClick={() => onSelect(lvl, name)}
            id="checkID"
          />
          <label htmlFor="checkID"></label>
          <span className="font_size_14">
            {lvl}★{name}
          </span>
        </div>
      );
    else
      return (
        <div className="game_pho">
          <img src={picURL} />
          <span className="font_size_14">
            {lvl}★{name}
          </span>
        </div>
      );
  };
  render() {
    return <div>{this.conditionalRender()}</div>;
  }
}

export default Character;
