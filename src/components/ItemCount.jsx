import React, { useState } from "react";
import "../styles/itemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    if (counter < stock) {
      const aux = counter + 1;
      setCounter(aux);
    } else {
      console.log("No hay mas stock");
    }
  };

  const subtract = () => {
    if (counter > initial) {
      const aux = counter - 1;
      setCounter(aux);
    } else {
      console.log(`Querés menos que ${initial}`);
    }
  };

  return (
    <div>
      <div className="itemCount">
        <button onClick={add} className="btnMasMenos">
          +
        </button>
        <p className="counter">{counter}</p>
        <button onClick={subtract} className="btnMasMenos">
          -
        </button>
      </div>
      <button onClick={() => onAdd(counter)} className="btnCarrito">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
