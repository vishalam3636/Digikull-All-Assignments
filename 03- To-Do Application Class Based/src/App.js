import React from "react";
import "./App.css";
import Todo from "./components/Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        {/* <h3>This is APP Component</h3> */}

        {/* BELOW IS TODO COMPONENT */}
        <Todo />
      </div>
    );
  }
}

export default App;
