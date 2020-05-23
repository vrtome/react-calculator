import React, { Component } from "react";
import "./App.css";
import Calculator from "./components/calculator";
import Display from "./components/display";

class App extends Component {
  state = {
    part: 0,
    display: "",
    operator: "",
    operators: ["+", "-", "/", "*"],
    equation: ["", ""],
  };
  render() {
    return (
      <React.Fragment>
        <div id="interface">
          <Display onType={this.state.display} />
          <Calculator onClick={this.handleOperation.bind(this)} />
        </div>
      </React.Fragment>
    );
  }

  handleOperation(e) {
    let self = "0";
    let terms = this.state.equation.slice();
    const state = this.state;
    const thisVar = this;

    var math = {
      num: function (x) {
        self = x;
      },
      oper: function (x) {
        self = x;
        thisVar.setState({
          display: self,
          operator: self,
          part: 1,
        });
      },
      "=": function () {
        terms[0] = operation[state.operator](
          parseFloat(terms[0]),
          parseFloat(terms[1])
        );
        terms[1] = "0";
        thisVar.setState({
          part: 0,
          display: terms[0],
          equation: terms,
        });
        throw "it's ended for now";
      },
      clear: function () {
        terms[state.part] = 0;
      },
      "clear-all": function () {
        terms[0] = terms[1] = "";
        thisVar.setState({ part: 0 });
      },
      ".": function () {
        terms[state.part] += terms[state.part] === "" ? "0." : ".";
      },
    };

    var operation = {
      "": function () {
        return terms[0];
      },
      "+": function (x, y) {
        return x + y;
      },
      "-": function (x, y) {
        return x - y;
      },
      "/": function (x, y) {
        return x / y;
      },
      "*": function (x, y) {
        return x * y;
      },
    };

    if (isNaN(e) && state.operators.indexOf(e) !== -1) {
      math["oper"](e);
    } else if (isNaN(e) === false) {
      math["num"](e);
      terms[this.state.part] += self;
      this.setState({
        display: terms[this.state.part],
        equation: terms,
      });
    } else {
      math[e]();
      this.setState({
        equation: terms,
        display: terms[state.part],
      });
    }
  }
}

export default App;
