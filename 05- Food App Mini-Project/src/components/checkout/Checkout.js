import React from "react";
import "./checkout.css";
import { useSelector, useDispatch } from "react-redux";

function Checkout() {
  const data = useSelector((state) => state.thaaliItems.selectedItems);
  const customerName = useSelector((state) => state.thaaliItems.customerName);
  const allItems = useSelector((state) => state.thaaliItems.selectedItems);
  console.log(data, "data in checkout");
  console.log(customerName, "customerName");
  console.log(allItems, "all Items");

  // Total Price Calculation in three steps
  let allPrices = [];
  data.map((item) => {
    allPrices.push({
      qty: item.itemQty,
      price: item.price,
    });
  });
  console.log(allPrices);

  let totalPrices = [];
  for (let i = 0; i < allPrices.length; i++) {
    totalPrices.push(allPrices[i].qty * allPrices[i].price);
  }
  console.log(totalPrices);

  // Calculation subTotal taxes
  let subTotal = `${
    totalPrices.length > 0 ? totalPrices.reduce((sum, curr) => sum + curr) : ""
  }`;
  console.log(subTotal);

  const handleCheckout = () => {
    console.log("checkout clicked !!");
    if (allItems.length < 2) {
      alert("You need to select alteast 2 items from menu ❌❌");
    } else {
      alert("Order Placed !! 🥳🥳");
    }
  };

  return (
    <div className="checkoutContainer">
      <div className="detailsHeading">
        <h3>Price Details</h3>
      </div>
      <div className="details">
        <label>Sub Total:</label>
        <p>
          ₹{subTotal > 0 ? Number(subTotal).toFixed(2) : Number(0).toFixed(2)}
        </p>
      </div>
      <div className="details">
        <label>Discount:</label>
        <p>-</p>
      </div>
      <div className="details">
        <label>Taxes and Charges</label>
        <p>NULL</p>
      </div>
      <div className="details">
        <label>Grand Total:</label>
        <p>
          ₹{subTotal > 0 ? Number(subTotal).toFixed(2) : Number(0).toFixed(2)}
        </p>
      </div>
      <div className="checkOutButtonContainer">
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
