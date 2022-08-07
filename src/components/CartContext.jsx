import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    let newCart = [];
    let isInCart = cartList.find((e) => e.id === item.id);

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

  const sumQty = () => {
    let total = 0;

    cartList.map((e) => (total += e.qty));

    return total;
  };

  const sumPrice = () => {
    let total = 0;

    cartList.map((e) => (total += e.price * e.qty));

    return total;
  };

  const sumTotal = () => {
    let total = 0;

    cartList.map((e) => (total += e.price * e.qty));

    let iva = (total * 21) / 100;

    const sumTotal = total + iva;

    return sumTotal;
  };

  const processCart = () => {
    return cartList.map((producto) => ({
      id: producto.id,
      title: producto.name,
      price: producto.price,
      qty: producto.qty,
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        sumQty,
        sumPrice,
        sumTotal,
        processCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
