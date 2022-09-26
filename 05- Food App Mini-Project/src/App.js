import React from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      {/* <div className="heading">
        <h3>This is App Component</h3>
      </div> */}

      <div className="appTop">
        <Header />
      </div>
      <div className="appMiddle">
        <Menu />

        <div className="cartAndCheckout">
          <Cart />
          <Checkout />
        </div>
      </div>

      <div className="appBottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;
