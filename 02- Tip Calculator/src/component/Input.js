import React from "react";
import Output from "./Output";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      billAmt: 0,
      service: "",
      custName: "",
      customersList: [
        "Rakesh Suthar offering a tip of 200 rupee",
        "Local Shop offering a tip of 100 rupee",
        "Local Shop offering a tip of 50 rupee",
      ],
      totalTip: 350,
    };
  }

  handleBillAmount = (e) => {
    this.setState({ billAmt: Number(e.target.value) });
  };

  handleName = (e) => {
    this.setState({ custName: e.target.value });
  };

  handleOptionSelect = (e) => {
    this.setState({ service: e.target.value });
  };

  handleAddCustomer = () => {
    if (this.state.billAmt && this.state.service && this.state.custName) {
      let calculatedTip = 0;
      if (this.state.service === "excellent") {
        calculatedTip = (20 / 100) * this.state.billAmt;
      } else if (this.state.service === "moderate") {
        calculatedTip = (10 / 100) * this.state.billAmt;
      } else if (this.state.service === "bad") {
        calculatedTip = (5 / 100) * this.state.billAmt;
      }
      let str = `${this.state.custName} offering a tip of rupees ${calculatedTip}`;

      let updatedList = [...this.state.customersList, str];
      this.setState({ customersList: updatedList });
      this.setState({ totalTip: this.state.totalTip + calculatedTip });

      // console.log(this.state.customersList);

      this.setState({ billAmt: 0 });
      this.setState({ service: "" });
      this.setState({ custName: "" });
    } else {
      alert("Fill all the required field");
    }
  };

  render() {
    // console.log(this.state.billAmt);
    // console.log(this.state.custName);
    // console.log(this.state.service);
    // console.log(this.state.customersList);
    return (
      <>
        <div className="mainContainer input">
          {/* <h1>This is Input Component</h1> */}
          <div className="inputHeading">
            <h3>Enter Your Bill Amount</h3>
          </div>
          <div className="inputfieldContainer">
            <input
              onChange={this.handleBillAmount}
              placeholder="Enter Bill Amount"
            />
          </div>

          <div className="others">
            <div className="selectContainer">
              <label>How Was The Service</label>
              <select onClick={this.handleOptionSelect}>
                <option>Choose</option>
                <option onClick={this.handleOptionSelect} value="excellent">
                  Excellent
                </option>
                <option onClick={this.handleOptionSelect} value="moderate">
                  Moderate
                </option>
                <option onClick={this.handleOptionSelect} value="bad">
                  Bad
                </option>
              </select>
            </div>
            <div className="customerNameContainer">
              <input
                onChange={this.handleName}
                placeholder="Enter Customers Name"
              />
            </div>
            <div onClick={this.handleAddCustomer} className="buttonContainer">
              <button>Add Customer</button>
            </div>
          </div>
        </div>

        {/***************************************************/}
        {/******************** OUTPUT COMPONENT *************/}
        {/***************************************************/}
        <Output
          listItems={this.state.customersList}
          totalTip={this.state.totalTip}
        />
      </>
    );
  }
}

export default Input;
