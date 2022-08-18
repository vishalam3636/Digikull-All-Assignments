import React from "react";

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTip: 350,
      // customersList: this.props.listItems,
      totalCustomer: 0,
      totalTip: 0,
    };
  }

  handleCalculateTipAndCustomer = () => {
    this.setState({ totalCustomer: this.props.listItems.length });
    this.setState({ totalTip: this.props.totalTip });
  };

  render() {
    return (
      <div className="mainContainer output">
        <div className="listHeading">
          <h3>Customer List</h3>
        </div>
        <div className="customersList">
          <ul>
            {/* {this.state.customersList.map((item) => (
              <li>{item}</li>
            ))} */}
            {this.props.listItems.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>

        {/* clculate tip and customer */}
        <div className="calculateButtonContainer">
          <button onClick={this.handleCalculateTipAndCustomer}>
            Calculate Tip & Customer
          </button>
        </div>

        <div className="displayTotalsContainer">
          <div className="totalsHeading">
            <p className="para-1">Total Customer</p>
            <p className="para-2">Tip</p>
          </div>
          <div className="outputResult">
            <p className="para-1">{this.state.totalCustomer}</p>
            <p className="para-2">{this.state.totalTip}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Output;
