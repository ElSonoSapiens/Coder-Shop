import React, { useState } from "react";
import "../styles/itemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    if (counter < stock) {
      const aux = counter + 1;
      setCounter(aux);
    } else {
      alert("No hay mas stock");
    }
  };

  const subtract = () => {
    if (counter > initial) {
      const aux = counter - 1;
      setCounter(aux);
    } else {
      alert(`Querés menos que ${initial}`);
    }
  };

  return (
    <div>
      <div className="itemCount">
        <button onClick={subtract} className="btnMasMenos">
          -
        </button>
        <p className="counter">{counter}</p>
        <button onClick={add} className="btnMasMenos">
          +
        </button>
      </div>
      <button onClick={() => onAdd(counter)} className="btnCarrito">
        Agregar al carrito
      </button>
      <Link to="/">
        <button className="btnCarrito">Agregar mas productos</button>
      </Link>
    </div>
  );
};

export default ItemCount;
