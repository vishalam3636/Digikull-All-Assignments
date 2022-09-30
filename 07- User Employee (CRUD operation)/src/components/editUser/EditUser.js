import React from "react";
import "./editUser.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function EditUser(props) {
  // console.log(props, "props in edit user comp");

  const {
    match: {
      params: { userId },
    },
    users,
    printUser,
    updateEmpFunc,
  } = props;
  // console.log(userId, "userId in edit detail comp");
  // console.log(users, "users in edit details comp");
  // console.log(printUser, "printUsers in edit details comp");

  const editUserObj = printUser[userId];
  // console.log(editUserObj, "editUserObj in editUser Comp");
  const { firstName, lastName, email } = editUserObj;
  // console.log(firstName, lastName, email, "destructured details");

  const [editedFirstName, setEditedFirstName] = useState(firstName);
  const [editedLastName, setEditedLastName] = useState(lastName);
  const [editedEmail, setEditedEmail] = useState(email);

  const handleUpdateUser = () => {
    const updatedUser = {
      firstName: editedFirstName,
      lastName: editedLastName,
      email: editedEmail,
    };

    updateEmpFunc(userId, updatedUser);
  };

  // console.log(
  //   editedFirstName,
  //   editedLastName,
  //   editedEmail,
  //   "edited data of user"
  // );

  return (
    <div className="userFormContainer">
      <div className="headingContainer">Edit User Details (id:{userId})</div>
      <div className="fieldContainer">
        <input
          value={editedFirstName}
          type="text"
          placeholder="First Name"
          onChange={(e) => setEditedFirstName(e.target.value)}
        />
        <label>First Name</label>
      </div>
      <div className="fieldContainer">
        <input
          value={editedLastName}
          type="text"
          placeholder="Last Name"
          onChange={(e) => setEditedLastName(e.target.value)}
        />
        <label>Last Name</label>
      </div>
      <div className="fieldContainer">
        <input
          value={editedEmail}
          type="email"
          placeholder="Email"
          onChange={(e) => setEditedEmail(e.target.value)}
        />
        <label>Email</label>
      </div>
      <div className="AddUserButtonContainer">
        <Link to="/details">
          <button onClick={handleUpdateUser}>Update User</button>
        </Link>
      </div>
    </div>
  );
}

export default EditUser;
