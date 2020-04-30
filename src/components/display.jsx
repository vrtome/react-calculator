import React, { Component } from "react";
import "./display.css";

class Display extends Component {
  state = {};
  render() {
    return <span>{this.props.onType}</span>;
  }
}

export default Display;
