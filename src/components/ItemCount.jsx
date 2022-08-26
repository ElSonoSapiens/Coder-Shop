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

  const complex = () => {
    {
      counter === 0 ? onAdd(counter) : alert("Producto agregado al carrito");
      onAdd(counter);
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
      <Link to="/">
        <button className="btnCarrito">Atrás</button>
      </Link>
      <button onClick={complex} className="btnCarrito">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
