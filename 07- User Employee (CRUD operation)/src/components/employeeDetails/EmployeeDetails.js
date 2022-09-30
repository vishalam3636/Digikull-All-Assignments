import React from "react";
import "./employeeDetails.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function EmployeeDetails(props) {
  // console.log(props, "props in employeedetails");

  const printUser = props.printUser;
  // console.log(printUser, "printUsers in employee details");

  const [findUser, setFindUser] = useState("");

  const handleAddEmployee = () => {
    props.addEmpFunc(findUser);
  };

  const handleDelete = (e) => {
    props.delEmpFunc(e.target.id);
  };

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
                    <td className="emailColumn">{item.email}</td>
                    <td>
                      <div className="buttonContainer">
                        <Link to={`/userDetailEdit/${key}`}>
                          <button id={key} className="editBtn">
                            Edit
                          </button>
                        </Link>

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
