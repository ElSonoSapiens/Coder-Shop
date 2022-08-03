import React, { useState, useEffect } from "react";
import "../styles/ItemListContainer.css";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import products from "../products";

function ItemListContainer() {
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
      {data.length > 0 ? (
        <div className="listCatalogo">
          <ItemList data={data} />
        </div>
      ) : (
        <p className="cargando">Cargando...</p>
      )}
    </>
  );
}

export default ItemListContainer;
