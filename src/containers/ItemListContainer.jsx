import React, { useState, useEffect } from "react";
import "../styles/ItemListContainer.css";
import ItemCount from "../components/ItemCount.jsx";
import ItemList from "../components/ItemList";

const Producto = (props) => {
  return (
    <>
      <h2 className="nombre">{props.nombre}</h2>
      <p className="descripcion">{props.descripcion}</p>
      <p className="precio">{props.precio}</p>
    </>
  );
};

const ItemListContainer = ({ greating }) => {
  const products = () => [
    {
      id: 1,
      name: "Correa",
      description: "2mt",
      price: 2000,
      img: "https://http2.mlstatic.com/D_NQ_NP_990581-MLA50663579498_072022-O.webp",
    },
    {
      id: 2,
      name: "Collar",
      description: "25cm",
      price: 1500,
      img: "https://http2.mlstatic.com/D_NQ_NP_699478-MLA48599601120_122021-O.webp",
    },
    {
      id: 3,
      name: "Pretal",
      description: "XL",
      price: 3000,
      img: "https://http2.mlstatic.com/D_NQ_NP_830681-MLA48454692285_122021-O.webp",
    },
    {
      id: 4,
      name: "Balanceao",
      description: "15kg",
      price: 7000,
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
