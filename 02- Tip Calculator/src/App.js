import React from "react";
import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Input from "./component/Input";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <Footer />
      </div>
    );
  }
}

export default App;
