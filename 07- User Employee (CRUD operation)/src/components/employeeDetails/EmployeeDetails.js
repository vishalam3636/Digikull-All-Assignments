import React from "react";
import "./employeeDetails.css";
import { useState } from "react";

function EmployeeDetails(props) {
  const [findUser, setFindUser] = useState("");
  const [printUser, setPrintUser] = useState([
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

  const users = props.users;

  const handleAddEmployee = () => {
    const searchedUserDetails = users.find(
      (item) => item.firstName.toUpperCase() === findUser.toUpperCase()
    );
    // console.log(searchedUserDetails, "searched user details again");

    if (searchedUserDetails) {
      if (
        printUser.find(
          (item) =>
            item.firstName.toUpperCase() ===
            searchedUserDetails.firstName.toUpperCase()
        )
      ) {
        alert("User already exists !!!");
      } else {
        const copyPrintUsers = [...printUser];
        copyPrintUsers.push(searchedUserDetails);
        setPrintUser(copyPrintUsers);
      }
    } else {
      alert("User Not Found... kindly add the user by filling the form");
    }

    setFindUser("");
  };

  const handleDelete = (e) => {
    let selectedUserId = e.target.id;
    // console.log(selectedUserId);

    let copyPrintUsers = [...printUser];
    copyPrintUsers.splice(selectedUserId, 1);

    setPrintUser(copyPrintUsers);
  };

  // console.log(users, "users");
  // console.log(printUser, "printUser");

  return (
    <div className="employeeDetailsContainer">
      <div className="top">
        <div className="headingContainer">
          <h3>Employee Details</h3>
        </div>
        <div className="searchFieldContainer">
          <input
            type="text"
            value={findUser}
            placeholder="search"
            onChange={(e) => setFindUser(e.target.value)}
          />
          <button onClick={handleAddEmployee}>Add Employee</button>
        </div>
      </div>

      <div className="bottom">
        <div className="employeesListContainer">
          <table className="table">
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email Id</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {printUser.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>
                      <div className="buttonContainer">
                        <button className="editBtn">Edit</button>
                        <button
                          id={key}
                          className="delBtn"
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
