import React from "react";
import { Link } from "react-router-dom";

const Item = ({ data }) => {
  return (
    <>
      <div>
        <div className="listCard">
          <h2 className="listName">{data.name}</h2>
          <img className="listImg" src={data.img} alt={data.alt} />
          <p className="listStock">
            <b>Stock disponible: </b>
            {data.stock} unidades
          </p>
          <p className="listPrice">
            <b>Precio: $</b>
            {data.price}
          </p>
          <Link to={`/item/${data.id}`}>
            <button className="btnDetalles"> Detalles del producto</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
