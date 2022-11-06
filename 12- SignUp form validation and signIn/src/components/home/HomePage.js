import React from "react";
import "./homePage.css";
import { useHistory } from "react-router-dom";

function HomePage() {
  const history = useHistory();

  const handleSignout = () => {
    history.push("/");
  };

  return (
    <div className="homePageContainer container">
      <div>This is HomePage</div>

      <button onClick={handleSignout}>signout</button>
    </div>
  );
}

export default HomePage;
