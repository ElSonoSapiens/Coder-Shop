import React, { useState, useEffect } from "react";
import "../styles/ItemListContainer.css";
import ItemCount from "../components/ItemCount.jsx";
import ItemList from "../components/ItemList";

const ItemListContainer = ({ greating }) => {
  const products = () => [
    {
      id: 1,
      name: "Correa",
      price: 2000,
      description: "2 mt",
      img: "https://http2.mlstatic.com/D_NQ_NP_990581-MLA50663579498_072022-O.webp",
    },
    {
      id: 2,
      name: "Collar",
      price: 1500,
      description: "20 cm",
      img: "https://http2.mlstatic.com/D_NQ_NP_699478-MLA48599601120_122021-O.webp",
    },
    {
      id: 3,
      name: "Pretal",
      price: 3000,
      description: "XL",
      img: "https://http2.mlstatic.com/D_NQ_NP_830681-MLA48454692285_122021-O.webp",
    },
    {
      id: 4,
      name: "Balanceao",
      price: 7000,
      description: "15 kg",
      img: "https://http2.mlstatic.com/D_NQ_NP_717513-MLA46542019198_062021-O.webp",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  const onAdd = (param) => {
    param > 0
      ? console.log(`La cantidad comprada es ${param}`)
      : console.log(`La cantidad es incorrecta`);
  };

  return (
    <>
      <div>{greating}</div>
      <div className="catalogo">
        <ItemList data={data} />
        <div className="flexCatalogo">
          <ItemCount initial={0} stock={20} onAdd={onAdd} />
          <ItemCount initial={0} stock={8} onAdd={onAdd} />
          <ItemCount initial={0} stock={5} onAdd={onAdd} />
          <ItemCount initial={0} stock={20} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
