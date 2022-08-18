import React from "react";
import "../component stylings/AddSubtract.css";

class AddSubtract extends React.Component {
  constructor() {
    super();

    this.state = { result: 0, newResult: 1, val: "" };
  }

  handleChange = (e) => {
    this.setState({ val: e.target.value });
    this.setState({ newResult: Number(e.target.value) });
  };

  addFunc = (e) => {
    this.setState({ result: (this.state.result += this.state.newResult * 1) });
    this.setState({ val: "" });
  };
  subFunc = (e) => {
    this.setState({ result: (this.state.result -= this.state.newResult * 1) });
    this.setState({ val: "" });
  };
  resetFunc = (e) => {
    this.setState({ result: 0 });
    this.setState({ val: "" });
    this.setState({ placeholder: "Enter Your Number" });
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="inputFieldContainer">
          <input
            type="number"
            onChange={this.handleChange}
            value={this.state.val}
          />
        </div>
        <div className="buttonsContainer">
          <div className="addButtonContainer">
            <button onClick={this.addFunc}>Add</button>
          </div>

          <div className="subtractButtonContainer">
            <button onClick={this.subFunc}>Subtract</button>
          </div>
        </div>
        <div className="displayResultContainer">
          <p>
            The Result Is:
            <span>
              <mark className="result">
                <strong>{this.state.result}</strong>
              </mark>
            </span>
          </p>
        </div>
        <div className="resetButtonContainer">
          <button onClick={this.resetFunc}>Reset</button>
        </div>
      </div>
    );
  }
}

export default AddSubtract;
