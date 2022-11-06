import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";

function App() {
  const [mode, setMode] = useState("dark");

  const changeMode = () => {
    const containerSelector = document.querySelector(".App");
    // console.log(containerSelector);

    if (mode === "light") {
      containerSelector.style.backgroundColor = "white";
      containerSelector.style.color = "black";
      setMode("dark");
    } else if (mode === "dark") {
      containerSelector.style.backgroundColor = "black";
      containerSelector.style.color = "white";
      setMode("light");
    }
  };

  return (
    <div className="App">
      <h3>This is App component</h3>
      <button onClick={changeMode}>{mode}</button>

      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <SignIn mode={changeMode} />}
          />
          <Route exact path="/signup" component={SignUp} />
          <HomePage exact path="/home" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
