import React from "react";
import "../styles/Item.css";
import ItemCount from "../components/ItemCount.jsx";

const onAdd = (param) => {
  param > 0
    ? console.log(`La cantidad comprada es ${param}`)
    : console.log(`La cantidad es incorrecta`);
};

const Item = ({ info }) => {
  return (
    <>
      <div>
        <div className="card">
          <h2>{info.name}</h2>
          <img src={info.img} className="imgItem" />
          <p>{info.description}</p>
          <p>Stock disponible: {info.stock} unidades</p>
        </div>
        <div>
          <ItemCount initial={0} stock={info.stock} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};

export default Item;
