import React from "react";
import "./cart.css";

import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  addQty,
  decreaseQty,
  removeFromCart,
} from "../../slices/thaaliSlice";

function Cart() {
  const dispatch = useDispatch();
  const thaaliItems = useSelector((state) => state.thaaliItems);
  // console.log(thaaliItems, "thaaliItems in cart");

  console.log(thaaliItems, "storedata in cart");
  const { menuItems, selectedItems } = thaaliItems;
  console.log(selectedItems, "selected items in cart");

  const handleAddQty = (e) => {
    const selectedItemId = e.target.id;
    console.log(selectedItemId);
    const copySelectedItems = [...selectedItems];
    const selectedDish = copySelectedItems[selectedItemId];
    console.log(selectedDish, "selected dish on clicking add");
    dispatch(addQty(selectedDish.id));
  };

  const handleDecreaseQty = (e) => {
    const selectedItemId = e.target.id;
    console.log(selectedItemId);

    const copySelectedItems = [...selectedItems];
    const selectedDish = copySelectedItems[selectedItemId];
    console.log(selectedDish, "selected dish on clicking add");

    dispatch(decreaseQty(selectedDish.id));
  };

  const handleRemoveItem = (e) => {
    const selectedItemId = e.target.id;
    console.log(e.target.id);

    const copySelectedItems = [...selectedItems];
    const selectedDish = copySelectedItems[selectedItemId];
    console.log(selectedDish, "selected dish on clicking remove");

    dispatch(removeFromCart(selectedDish.id));
  };

  return (
    <div>
      {/* CART */}
      <div className="cartContainer">
        <div className="cartHeading">
          <h3>This is Cart Component</h3>
        </div>
        <div className="displayCartItemsContainer">
          {selectedItems.map((item, key) => {
            const { itemName, itemQty, image, description, price } = item;
            return (
              <div className="addedItemContainer" key={key}>
                <div className="top">
                  <div className="imageContainer">
                    <img src={`${image}`}></img>
                  </div>
                  <div className="descriptionContainer">
                    <div className="heading">
                      <h4>{itemName}</h4>
                    </div>
                    <div className="description">
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <div className="buttonsContainer">
                    <div className="quantityContainer">
                      <button id={key} onClick={handleDecreaseQty}>
                        -
                      </button>
                      <div className="displayQty">{itemQty}</div>
                      <button id={key} onClick={handleAddQty}>
                        +
                      </button>
                    </div>
                    <div className="removeContainer">
                      <button id={key} onClick={handleRemoveItem}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="dishPriceContainer">
                    <p>
                      <strong>₹ {itemQty * price}</strong>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/*  DEMO CARD */}
          {/* <div className="addedItemContainer">
          <div className="top">
            <div className="imageContainer">
              <img src="https://static9.depositphotos.com/1636803/1152/i/600/depositphotos_11524654-stock-photo-3d-shopping-cart-isolated.jpg"></img>
            </div>
            <div className="descriptionContainer">
              <div className="heading">
                <h4>Cart Dish</h4>
              </div>
              <div className="description">
                <p>
                  ndnkn dknndkf nkd DESCRIPTION nsnjj knlknk mdmdm mldclm;lmd
                  knkndk dnkcnd nkdnk njcd knckn mlsl
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="buttonsContainer">
              <div className="quantityContainer">
                <button>-</button>
                <div className="displayQty">{"1"}</div>
                <button>+</button>
              </div>
              <div className="removeContainer">
                <button>Remove</button>
              </div>
            </div>
            <div className="dishPriceContainer">
              <p>
                <strong>₹ {"450"}</strong>
              </p>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
