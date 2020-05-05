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
  render() {
    const { picURL, lvl, name, onSelect } = this.props;
    return (
      <div className="game_pho" onClick={() => onSelect(lvl, name)}>
        <img src={picURL} />
        <input
          type="checkbox"
          className="input"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
          id="checkID"
        />
        <label htmlFor="checkID"></label>
        <span className="font_size_14">
          {lvl}★{name}
        </span>
      </div>
    );
  }
}

export default Character;
