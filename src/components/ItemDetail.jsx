import React from "react";
import "../styles/ItemDetail.css";
import ItemCount from "../components/ItemCount.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const Item = ({ info }) => {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (param) => {
    param > 0
      ? alert(`La cantidad a comprar es ${param}`)
      : alert(`La cantidad es incorrecta`);
    setItemCount(param);
  };

  return (
    <>
      <div>
        <div className="itemCard">
          <img className="itemImg" src={info.img} alt={info.alt} />
          <div>
            <h2 className="itemName">{info.name}</h2>
            <p className="itemDescripcion">{info.description}</p>
            <p className="itemStock">
              <b>Stock disponible:</b> {info.stock} unidades
            </p>
          </div>
        </div>
        {itemCount === 0 ? (
          <ItemCount initial={itemCount} stock={info.stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button className="itemCheckout">Checkout</button>
          </Link>
        )}
      </div>
    </>
  );
};

const ItemDetail = ({ data }) => {
  return <>{data ? <Item key={data.id} info={data} /> : "Cargando..."}</>;
};

export default ItemDetail;
