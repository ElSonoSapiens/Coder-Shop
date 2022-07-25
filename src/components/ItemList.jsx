import React from "react";
import "../styles/ItemList.css";
import ItemCount from "../components/ItemCount.jsx";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  const onAdd = (param) => {
    param > 0
      ? alert(`La cantidad a comprar es ${param}`)
      : alert(`La cantidad es incorrecta`);
  };

  return (
    <>
      <div>
        <div className="listCard">
          <h2 className="listName">{info.name}</h2>
          <img className="listImg" src={info.img} alt={info.alt} />
          <p className="listStock">
            <b>Stock disponible: </b>
            {info.stock} unidades
          </p>
          <p className="listPrice">
            <b>Precio: $</b>
            {info.price}
          </p>
          <Link to={`/item/${info.id}`}>
            <button className="btnDetalles"> Detalles del producto</button>
          </Link>
          <ItemCount initial={0} stock={info.stock} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};

const ItemList = ({ data } = []) => {
  return data.map((data) => <Item key={data.id} info={data} />);
};

export default ItemList;
