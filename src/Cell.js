import React, { Component } from "react";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
  }

  handleClickEvent = () => {
    this.setState({
      color: "#333"
    });
  };

  render() {
    return (
      <div
        onClick={this.handleClickEvent}
        className="cell"
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}

export default Cell;
