import React from "react";
import "./userForm.css";
import { useState } from "react";

function UserForm(props) {
  // console.log(props, "props in userForm");
  const addUserFunc = props.addFunc;
  // console.log(addUserFunc, "Add user func");

  // const [newUser, setNewUser] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = () => {
    const newUserData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    addUserFunc(newUserData);
  };

  // console.log(firstName, lastName, email);
  return (
    <div className="userFormContainer">
      <div className="headingContainer">ADD USER</div>
      <div className="fieldContainer">
        <input
          type="text"
          placeholder="First Name"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>First Name</label>
      </div>
      <div className="fieldContainer">
        <input
          type="text"
          placeholder="Last Name"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Last Name</label>
      </div>
      <div className="fieldContainer">
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Email</label>
      </div>
      <div className="AddUserButtonContainer">
        <button onClick={handleAddUser}>Add USer</button>
      </div>
    </div>
  );
}

export default UserForm;
