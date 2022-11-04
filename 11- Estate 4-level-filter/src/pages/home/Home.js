import React, { useState } from "react";
import "./home.css";

function Home(props) {
  console.log(props);
  const [houseData, setHouseData] = useState(props.houseData);
  const [search, setSearch] = useState({
    location: "",
    date: "",
    type: "",
  });
  const selectedFavFunc = props.selectedFavFunc;
  console.log(selectedFavFunc, "selectedFavFuncccc");

  const setValInState = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });

    console.log(search);
  };

  const finalSearch = () => {
    if (search.location.length > 0) {
      let fi = houseData.filter((ele) => ele.country == search.location);

      setHouseData([...fi]);
    }

    if (search.date.length > 0) {
      let fi = houseData.filter((ele) => ele.year == search.date.split("-")[0]);

      setHouseData([...fi]);
    }

    if (search.type.length > 0) {
      let fi = houseData.filter((ele) => ele.type == search.type);

      setHouseData([...fi]);
    }

    console.log(houseData, "houseData");
  };

  const selectFav = (e) => {
    console.log(e.target.id, "SelectFavInHome");
    selectedFavFunc(e.target.id);
  };

  console.log(houseData, "all houses");
  console.log(search, "search val");
  return (
    <div className="homeContainer">
      {/*********** Search Bar *********/}
      <div className="searchContainer">
        <h1>Search properties to rent</h1>
        <input placeholder="Search with Search Bar" />
      </div>

      {/************* Filter Bar **********/}
      <div className="filterContainer">
        {/* location select */}
        <div className="locationFilterContainer">
          <label>Location</label>
          <select className="location" name="location" onChange={setValInState}>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        {/* When select */}
        <div className="whenFilterContainer">
          <label>When</label>
          <input type="date" name="date" onChange={setValInState} />
        </div>

        {/* Price range select */}
        <div className="priceFilterContainer">
          <label>Price</label>
          <select className="propertyPriceRange">
            <option>$500-$2500</option>
          </select>
        </div>

        {/* Property Type Select  */}
        <div className="propertyTypeContainer">
          <label>Property Type</label>
          <select name="type" className="propertyType" onChange={setValInState}>
            <option value="House">Houses</option>
            <option value="Apartament">Apartaments</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="searchButtonContainer">
          <button onClick={finalSearch}>Search</button>
        </div>
      </div>

      {/********* Print Cards Container *******/}
      <div className="cardsContainer">
        {houseData.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="imgContainer">
                <img src={item.image} alt="house-1" />
              </div>
              <div className="rentPrice">
                <p className="rateAndFav">
                  <strong>
                    <font color="blue">₹{item.price}</font>
                    <small>/month</small>
                  </strong>
                  <button id={item.id} className="favEmogi" onClick={selectFav}>
                    🤍
                  </button>
                </p>
                <p>
                  {item.country}, {item.year}, {item.type}
                </p>
              </div>
              <div className="houseTitle">
                <p className="houseTitleContainer">
                  <strong>{item.name}</strong>
                </p>
              </div>
              <div className="location">
                <p className="locationContainer">{item.address}</p>
              </div>
              <div className="servicesContainer">
                <p>🛌🏻 {item.bedrooms} bedooms</p>
                <p>🛀🏻 {item.bathrooms} Bathrooms</p>
                <p>🏘️ {item.surface}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
