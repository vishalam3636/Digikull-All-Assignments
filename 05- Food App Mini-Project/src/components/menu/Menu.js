import React from "react";
import "./menu.css";

import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  addQty,
  decreaseQty,
} from "../../slices/thaaliSlice";

function Menu() {
  const dispatch = useDispatch();

  // Getting thaaliitems from store
  const thaaliItems = useSelector((state) => state.thaaliItems);
  // console.log(thaaliItems, "thaaliItems in Menu");

  const { menuItems, selectedItems } = thaaliItems;
  // console.log(menuItems, "menuItems");
  // console.log(selectedItems, "selectedItems");

  // Handling add items button (adding item to cart)
  const handleAddToThaali = (e) => {
    // console.log(e.target.id);
    const selectedItemId = e.target.id;
    // console.log(selectedItemId);

    const copyMenuItems = [...menuItems];
    const selectedDish = copyMenuItems[selectedItemId];

    if (
      selectedItems.filter((item) => item.id === selectedDish.id).length === 0
    ) {
      dispatch(addItem(selectedDish));
    } else {
      alert("item already exists in cart");
    }
  };

  const handleAddQty = (e) => {
    const selectedItemId = e.target.id;

    const copyMenuItems = [...menuItems];
    const selectedDish = copyMenuItems[selectedItemId];
    console.log(selectedDish, "selected dish on clicking add");

    dispatch(addQty(selectedDish.id));
  };

  const handleDecreaseQty = (e) => {
    const selectedItemId = e.target.id;

    const copyMenuItems = [...menuItems];
    const selectedDish = copyMenuItems[selectedItemId];
    console.log(selectedDish, "selected dish on clicking decrease");

    dispatch(decreaseQty(selectedDish.id));
  };

  return (
    <div className="menuContainer">
      <div className="heading">
        <h3>Menu</h3>
      </div>

      <div className="displayMenu">
        {menuItems.map((item, key) => {
          // console.log(item, key);
          const { itemName, image, price, itemQty } = item;
          return (
            <div className="dishcard" key={key}>
              <div className="imageContainer">
                <img src={`${image}`}></img>
              </div>
              <div className="dishDetail">
                <p>
                  <strong>Item:</strong> {itemName}
                </p>
                <p>
                  <strong>Price:</strong> {"₹" + price}
                </p>
                <div className="quantityContainer">
                  <button id={key} onClick={handleDecreaseQty}>
                    -
                  </button>
                  <div className="displayQty">{itemQty}</div>
                  <button id={key} onClick={handleAddQty}>
                    +
                  </button>
                </div>
                <p className="addToThaaliButtonContainer">
                  <button id={key} onClick={handleAddToThaali}>
                    Add to Thaali
                  </button>
                </p>
              </div>
            </div>
          );
        })}

        {/******* DUMMY CARD ******/}
        {/* <div className="dishcard">
          <div className="imageContainer">
            <img src="https://images.pexels.com/photos/563067/pexels-photo-563067.jpeg"></img>
          </div>
          <div className="dishDetail">
            <p>
              <strong>Item:</strong>
              {" Dish"}
            </p>
            <p>
              <strong>Price:</strong>
              {" ₹200"}
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Menu;
