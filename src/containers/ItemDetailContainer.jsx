import React, { useState, useEffect } from "react";
import "../styles/ItemDetailContainer.css";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = ({ greating }) => {
  const products = [
    {
      id: 1,
      name: "Correa",
      price: 2000,
      description: "2 mt",
      stock: 15,
      img: "https://http2.mlstatic.com/D_NQ_NP_990581-MLA50663579498_072022-O.webp",
    },
    {
      id: 2,
      name: "Collar",
      price: 1500,
      description: "20 cm",
      stock: 10,
      img: "https://http2.mlstatic.com/D_NQ_NP_699478-MLA48599601120_122021-O.webp",
    },
    {
      id: 3,
      name: "Pretal",
      price: 3000,
      description: "XL",
      stock: 5,
      img: "https://http2.mlstatic.com/D_NQ_NP_830681-MLA48454692285_122021-O.webp",
    },
    {
      id: 4,
      name: "Balanceado",
      price: 7000,
      description: "15 kg",
      stock: 0,
      img: "https://http2.mlstatic.com/D_NQ_NP_717513-MLA46542019198_062021-O.webp",
    },
  ];

  const [data, setData] = useState(false);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products[3]);
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, []);

  return (
    <>
      <div>{greating}</div>
      <div className="catalogo">
        <ItemDetail data={data} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
