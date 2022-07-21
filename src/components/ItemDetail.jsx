import React from "react";
import Item from "../components/Item";

const ItemDetail = ({ data }) => {
  return <>{data ? <Item key={data.id} info={data} /> : "Cargando..."}</>;
};

export default ItemDetail;
