import React from "react";

import "../styles/ItemDetail.css";
import ItemCount from "../components/ItemCount.jsx";
import onAdd from "./OnAdd";

const Item = ({ info }) => {
  return (
    <>
      <div>
        <div className="itemCard">
          <img className="itemImg" src={info.img} alt={info.alt}  />
          <div>
            <h2 className="itemName">{info.name}</h2>
            <p className="itemDescripcion">{info.description}</p>
            <p className="itemStock"><b>Stock disponible:</b> {info.stock} unidades</p>
          </div>
        </div>
        <div>
          <ItemCount initial={0} stock={info.stock} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};

const ItemDetail = ({ data }) => {
  return <>{data ? <Item key={data.id} info={data} /> : "Cargando..."}</>;
};

export default ItemDetail;
