import React, { Component } from "react";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <div className="pad" onClick={(e) => this.props.onClick(e.target.name)}>
          <div className="row">
            <button name="7">7</button>
            <button name="8">8</button>
            <button name="9">9</button>
            <button name="/">/</button>
          </div>
          <div className="row">
            <button name="4">4</button>
            <button name="5">5</button>
            <button name="6">6</button>
            <button name="+">+</button>
          </div>
          <div className="row">
            <button name="1">1</button>
            <button name="2">2</button>
            <button name="3">3</button>
            <button name="-">-</button>
          </div>
          <div className="row">
            <button name=".">.</button>
            <button name="0">0</button>
            <button name="*">*</button>
            <button name="=">=</button>
          </div>
          <div className="row">
            <button name="clear" style={{ width: 400 }}>
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
