import React, { useState, useEffect } from "react";
import "../styles/ItemListContainer.css";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const products = [
    {
      id: 1,
      categoryId: 1,
      name: "Correa 2mt",
      price: 2000,
      stock: 15,
      img: "https://http2.mlstatic.com/D_NQ_NP_990581-MLA50663579498_072022-O.webp",
    },
    {
      id: 2,
      categoryId: 1,
      name: "Correa Canicross P/ Perro, + Cinturon, Elastizada, 2mts K9",
      price: 2000,
      stock: 8,
      img: "https://http2.mlstatic.com/D_NQ_NP_877006-MLA45142618935_032021-O.webp",
    },
    {
      id: 3,
      categoryId: 1,
      name: "Correa Larga 10 Metros Reforzada Paseo Adiestramiento Perros",
      price: 2000,
      stock: 15,
      img: "https://http2.mlstatic.com/D_NQ_NP_753016-MLA43523957007_092020-O.webp",
    },

    {
      id: 21,
      categoryId: 2,
      name: "Collar De Intervención K9 Adiestramiento Canino",
      price: 3600,
      stock: 4,
      img: "https://http2.mlstatic.com/D_NQ_NP_948267-MLA43691111922_102020-O.webp",
    },
    {
      id: 22,
      categoryId: 2,
      name: "Collar Rápido Para Perro Regulable Paseo Identificatorio",
      price: 900,
      stock: 16,
      img: "https://http2.mlstatic.com/D_NQ_NP_792727-MLA43971156607_112020-O.webp",
    },
    {
      id: 23,
      categoryId: 2,
      name: "Collar Luz Led Para Perros Gatos Ajustable Con 3 Modos Luz",
      price: 600,
      stock: 6,
      img: "https://http2.mlstatic.com/D_NQ_NP_957026-MLA49470644733_032022-O.webp",
    },
    {
      id: 25,
      categoryId: 2,
      name: "Arnés H Paseo Viajes Anti-tirón Regulable Doble Enganche",
      price: 3000,
      stock: 5,
      img: "https://http2.mlstatic.com/D_NQ_NP_830681-MLA48454692285_122021-O.webp",
    },

    {
      id: 22,
      categoryId: 3,
      name: "Juguete Soga Dos Nudos Gigante 55cm",
      price: 880,
      stock: 16,
      img: "https://http2.mlstatic.com/D_NQ_NP_711402-MLA46846116115_072021-O.webp",
    },
    {
      id: 23,
      categoryId: 3,
      name: "Pelota De Goma Caucho Maciza Para Perros 7.5 Cm X 3 Unidades",
      price: 1300,
      stock: 8,
      img: "https://http2.mlstatic.com/D_NQ_NP_878362-MLA50789407342_072022-O.webp",
    },
    {
      id: 24,
      categoryId: 3,
      name: "Juguete Perros Mordillo Dental Multicolor Masajeador Encías",
      price: 750,
      stock: 10,
      img: "https://http2.mlstatic.com/D_NQ_NP_974106-MLA43881477308_102020-O.webp",
    },

    {
      id: 41,
      categoryId: 4,
      name: "Alimento Sieger Super Premium ",
      price: 8500,
      stock: 7,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_733120-MLA50131748752_052022-F.webp",
    },
    {
      id: 42,
      categoryId: 4,
      name: "Alimento Agility Premium para perro adulto",
      price: 5700,
      stock: 4,
      img: "https://http2.mlstatic.com/D_NQ_NP_995500-MLA50207974187_062022-O.webp",
    },
    {
      id: 43,
      categoryId: 4,
      name: "Balanceado Premium",
      price: 7000,
      stock: 5,
      img: "https://http2.mlstatic.com/D_NQ_NP_717513-MLA46542019198_062021-O.webp",
    },
  ];

  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
      const getData = new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });
      getData.then((res) => setData(res));
    } else {
      const getData = new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.filter((item) => item.categoryId === parseInt(id)));
        }, 2000);
      });
      getData.then((res) => setData(res));
    }
  }, [id]);

  return (
    <>
      <div className="catalogo">
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemListContainer;
