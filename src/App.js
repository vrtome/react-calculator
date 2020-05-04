import React, { Component } from "react";
import "./App.css";
import Calculator from "./components/calculator";
import Display from "./components/display";

class App extends Component {
  state = {
    part: 1,
    first: "",
    second: "",
    display: "",
    operators: ["+", "-", "/", "*"],
    operator: "",
  };
  render() {
    return (
      <React.Fragment>
        <div id="interface">
          <Display onType={this.state.display} />
          <Calculator onClick={this.handleOperation} />
        </div>
      </React.Fragment>
    );
  }

  handleOperation = (e) => {
    if (this.state.part === 1) {
      if (this.state.operators.indexOf(e) !== -1) {
        this.setState({ part: 2, operator: e, display: e });
        console.log("now 2");
      } else if (e === "clear") {
        this.setState({
          first: this.state.first.substring(0, this.state.first.length - 1),
          display: this.state.first.substring(0, this.state.first.length - 1),
        });
      } else if (this.state.part === 1) {
        this.setState({
          first: this.state.first + e,
          display: this.state.first + e,
        });
      }
    } else if (
      this.state.part === 2 &&
      e !== "=" &&
      this.state.operators.indexOf(e) === -1
    ) {
      if (e === "clear") {
        this.setState({
          second: this.state.second.substring(0, this.state.second.length - 1),
          display: this.state.second.substring(0, this.state.second.length - 1),
        });
      } else {
        this.setState({
          second: this.state.second + e,
          display: this.state.second + e,
        });
      }
    } else if (e === "=") {
      return this.setState({
        display: math[this.state.operator](
          parseFloat(this.state.first),
          parseFloat(this.state.second)
        ),
        part: 3,
        first: math[this.state.operator](
          parseFloat(this.state.first),
          parseFloat(this.state.second)
        ),
      });
    } else if (
      this.state.part === 3 &&
      this.state.operators.indexOf(e) !== -1
    ) {
      this.setState({ part: 2, operator: e, display: e, second: "" });
    } else if (e === "clear" && this.state.part === 3) {
      this.setState({ part: 1, first: "0", second: "", display: "" });
    } else if (this.state.part === 3) {
      this.setState({
        part: 1,
        first: e,
        second: "",
        display: "" + e,
      });
    }
  };
}

/*{
    if (this.state.operators.indexOf(e) !== -1) {
      if (this.state.part === 1) {
        this.setState({ part: 2, operator: e });
        return console.log("operator");
      }
    } else if (e === "=") {
      return math[this.state.operator](
        parseInt(this.state.first),
        parseInt(this.state.second)
      );
    } else if (e === "clear") {

    } else {
      if (this.state.part === 1) {
        this.setState({ first: this.state.first + e });
        return console.log(this.state.first);
      } else {
        this.setState({ second: this.state.second + e });
        return console.log(this.state.second);
      }
    }
  };
}*/

var math = {
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

export default App;
