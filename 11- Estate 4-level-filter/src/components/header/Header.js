import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import logo4P from "../../assets/logo/logo4P.png";

function Header() {
  return (
    <header className="headerContainer">
      <nav>
        <div className="leftSide">
          {/* LOGO */}
          <Link to="/">
            <div className="logoContainer">
              <img src={logo4P} />
            </div>
          </Link>

          {/* Buttons */}
          <div className="navButtonsContainer">
            <Link to="/">
              <button>Rent</button>
            </Link>
            <Link to={`/favourites`}>
              <button>Favourites</button>
            </Link>

            <button>Sell</button>
            <button>Manage Property</button>
            <button>Resources</button>
          </div>
        </div>

        <div className="rightSide">
          <div className="loginSignupContainer">
            <button className="loginButton">Login</button>
            <button className="signUpButton">Signup</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
