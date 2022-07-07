import React from "react";
import cart from "../assets/img/cart.svg";
import "./CartWidget.css";

const CartWidget = () => {
  return <img src={cart} alt="Cart" className="navbarCart" />;
};
export default CartWidget;
