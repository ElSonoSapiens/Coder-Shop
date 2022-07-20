import React from "react";
import Item from "../components/Item";

const ItemDetail = ({ data } = []) => {
  return data.map((prod) => <Item key={prod.id} info={prod} />);
};

export default ItemDetail;
