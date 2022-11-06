import React from "react";
import "./homePage.css";
import { useHistory } from "react-router-dom";

// Import HOC made for internet connection checking
import CheckConnection from "../checkConnection/CheckConnection";

function HomePage() {
  const history = useHistory();

  const handleSignout = () => {
    history.push("/");
  };

  return (
    <CheckConnection>
      <div className="homePageContainer container">
        <div>This is HomePage</div>

        <button onClick={handleSignout}>signout</button>
      </div>
    </CheckConnection>
  );
}

export default HomePage;
