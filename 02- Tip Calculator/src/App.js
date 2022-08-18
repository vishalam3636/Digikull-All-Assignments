import React from "react";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Input from "./component/Input";
import Output from "./component/Output";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        {/* <h1>APP COMPONENT</h1> */}

        <Header />
        <Input />
        {/* <Output /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
