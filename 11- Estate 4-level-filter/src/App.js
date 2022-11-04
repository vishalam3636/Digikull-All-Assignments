import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import data from "./data";

// Import Pages
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import PropertyDetails from "./pages/propertyDetails/Favourites";
import Favourites from "./pages/propertyDetails/Favourites";

function App() {
  const [allData, setAllData] = useState(data);
  const [favData, setFavData] = useState([]);

  const selectedFavFunc = (id) => {
    console.log(id, "id came in appppp");
    const selectedId = id;
    console.log(allData, "aaaallll data");
    const copyFavData = [...favData];

    const selectedObj = allData.find((obj) => {
      return obj.id * 1 === selectedId * 1;
    });
    // console.log(selectedObj, "selectedObj");

    copyFavData.push(selectedObj);
    setFavData(copyFavData);
  };
  console.log(favData);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home houseData={allData} selectedFavFunc={selectedFavFunc} />
            )}
          />
          <Route
            exact
            path="/favourites"
            component={() => <Favourites favs={favData} />}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
