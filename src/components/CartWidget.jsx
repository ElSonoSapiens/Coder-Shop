import React from "react";
import cart from "../assets/img/cart.svg";
import "../styles/CartWidget.css";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  return (
    <div className="widget">
      <img src={cart} alt="Cart" className="navbarCart" />
      {cartContext.cartList.length > 0 && (
        <p className="sumQty">{cartContext.sumQty()}</p>
      )}
    </div>
  );
};

export default CartWidget;
