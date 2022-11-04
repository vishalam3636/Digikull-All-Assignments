import React from "react";
import "./favourites.css";

function Favourites(props) {
  console.log(props);
  const selectedFavs = props.favs;
  console.log(selectedFavs, "SelectedFavs");

  return (
    <div className="favouriteContainer">
      <div className="favHeading">
        <h3>Favourites</h3>
      </div>

      <div className="favHousesContainer">
        {selectedFavs.map((item) => {
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
                  <button id={item.id} className="favEmogi">
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

export default Favourites;
