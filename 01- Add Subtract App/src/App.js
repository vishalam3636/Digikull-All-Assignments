import React from "react";
import "./App.css";
import AddSubtract from "./component/AddSubtract";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <AddSubtract />
      </div>
    );
  }
}

export default App;
