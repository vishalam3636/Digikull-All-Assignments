import "./App.css";
import UserForm from "./components/userForm/UserForm";
import EmployeeDetails from "./components/employeeDetails/EmployeeDetails";

import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Header from "./components/header/Header";

import { useState } from "react";
import EditUser from "./components/editUser/EditUser";

function App() {
  const [user, setUser] = useState([
    {
      firstName: "Brownie 🐕",
      lastName: "Sweetiee",
      email: "brownie@yahoo.com",
    },
    {
      firstName: "Vishals Mom",
      lastName: "Chauhan",
      email: "mataji@yahoo.com",
    },
    {
      firstName: "Swetas Mom",
      lastName: "Saha",
      email: "mummy@yahoo.com",
    },
    {
      firstName: "Sweta",
      lastName: "Saha",
      email: "sweta@yahoo.com",
    },
    {
      firstName: "Vishal",
      lastName: "Chauhan",
      email: "vishal@yahoo.com",
    },
  ]);

  const [printUser, setPrintUser] = useState([...user]);

  const addUserFunc = (nUser) => {
    // console.log(nUser, "nUser");
    const copyUser = [...user];
    const updatedUser = [...copyUser, nUser];
    setUser(updatedUser);
  };

  const handlePrintUserFunc = (searchAndPrintUser) => {
    // console.log(searchAndPrintUser, "SearchAndPrintUser");
    let searchedUser = user.find(
      (item) =>
        item.firstName.toUpperCase() === searchAndPrintUser.toUpperCase()
    );

    if (searchedUser) {
      if (
        printUser.find(
          (item) =>
            item.firstName.toUpperCase() ===
            searchedUser.firstName.toUpperCase()
        )
      ) {
        alert("User already exists...");
      } else {
        const copyPrintUser = [...printUser];
        copyPrintUser.push(searchedUser);
        setPrintUser(copyPrintUser);
      }
    } else {
      alert("User Not Found In The Data Base !!");
    }

    // console.log(searchedUser, "SearchedUser Obj");
  };

  const handleDeleteFunc = (deleteObj) => {
    let deleteObjId = deleteObj;
    // console.log(deleteObjId);

    const copyPrintUser = [...printUser];
    copyPrintUser.splice(deleteObjId, 1);
    setPrintUser(copyPrintUser);
  };

  const handleUpdateUserFunc = (userId, updatedEmp) => {
    // console.log(userId, updatedEmp, "userId and updatedEmp in app");

    const copyPrintUser = [...printUser];
    copyPrintUser[userId] = updatedEmp;
    setPrintUser(copyPrintUser);
  };

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
            component={() => (
              <EmployeeDetails
                users={user}
                printUser={printUser}
                addEmpFunc={handlePrintUserFunc}
                delEmpFunc={handleDeleteFunc}
              />
            )}
          />
          <Route
            exact
            path="/userDetailEdit/:userId"
            component={(propRoutes) => (
              <EditUser
                users={user}
                printUser={printUser}
                {...propRoutes}
                updateEmpFunc={handleUpdateUserFunc}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
