import "./App.css";
import UserForm from "./components/userForm/UserForm";
import EmployeeDetails from "./components/employeeDetails/EmployeeDetails";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";

import { useState } from "react";

function App() {
  const [user, setUser] = useState([
    {
      firstName: "Vishal",
      lastName: "Chauhan",
      email: "vishal@yahoo.com",
    },
    {
      firstName: "Sweta",
      lastName: "Saha",
      email: "sweta@yahoo.com",
    },
    {
      firstName: "Komal",
      lastName: "Softy",
      email: "nautanki@yahoo.com",
    },
    {
      firstName: "Manish",
      lastName: "Kumar",
      email: "bandar@gmail.com",
    },
  ]);

  const addUserFunc = (nUser) => {
    // console.log(nUser, "nUser");
    const copyUser = [...user];
    const updatedUser = [...copyUser, nUser];
    setUser(updatedUser);
  };

  // console.log("Yaaahhooooo");

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <UserForm addFunc={addUserFunc} />}
          />
          <Route
            exact
            path="/details"
            component={() => <EmployeeDetails users={user} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
