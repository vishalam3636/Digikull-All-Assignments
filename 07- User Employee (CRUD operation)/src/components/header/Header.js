import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="headerComponent">
      <Link to="/">
        <button>Add User</button>
      </Link>
      <Link to="/details">
        <button>Employee Details</button>
      </Link>
    </div>
  );
}

export default Header;
