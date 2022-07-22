import React from "react";
import Item from "../components/Item";

const ItemList = ({ data } = []) => {
  return data.map((data) => <Item key={data.id} info={data} />);
};

export default ItemList;
