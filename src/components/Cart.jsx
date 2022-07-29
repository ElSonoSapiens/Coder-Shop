import React from "react";
import "../styles/Cart.css";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Cart = () => {
  const test = useContext(CartContext);
  console.log(test.cartList);

  return (
    <>
      <h1>Cart 🛒</h1>
      {test.cartList.length > 0 &&
        test.cartList.map((item) => {
          return (
            <div className="cartContainer">
              <div className="cartCard">
                <img className="cartImg" src={item.img} alt={item.alt} />
                <h2 className="cartName">{item.name}</h2>
                <div>
                  <div className="cartUPD">
                    <p className="cartQty">{item.qty} unidades</p>
                    <p className="cartPrice">${item.price * item.qty}</p>
                    <button
                      className="cartRemove"
                      onClick={() => test.removeItem(item.id)}
                    >
                      Delete Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <button className="cartClear" onClick={test.clear}>
        Clear Items{" "}
      </button>
    </>
  );
};

export default Cart;
