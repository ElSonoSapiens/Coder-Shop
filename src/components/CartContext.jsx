import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    let newCart = [];
    let isInCart = cartList.find((isInCart) => isInCart.id === item.id);

    if (isInCart) {
      isInCart.qty += qty;
      newCart = [...cartList];
    } else {
      isInCart = { ...item, qty: qty };
      newCart = [...cartList, isInCart];
    }
    setCartList(newCart);
  };

  const removeItem = (id) => {
    let newList = cartList.filter((item) => item.id !== id);
    setCartList(newList);
  };

  const clear = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
