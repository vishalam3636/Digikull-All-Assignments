import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import Registration from "./components/signIn/SignIn";

function App() {
  return (
    <div className="App">
      <h3>This is App component</h3>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Registration} />
          <HomePage exact path="/home" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
