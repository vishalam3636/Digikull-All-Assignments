import React from "react";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mainContainer header">
        {/* <h1>This is Header Component</h1> */}
        <h1>Tip Calculator</h1>
        <p>Build In React</p>
      </div>
    );
  }
}

export default Header;
