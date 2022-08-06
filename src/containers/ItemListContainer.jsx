import React, { useState, useEffect } from "react";
import "../styles/ItemListContainer.css";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
// import products from "../products";
import { getDocs, query, where } from "firebase/firestore";
import { productsCollection } from "../utils/firebaseConfig";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      const productsFilter = query(
        productsCollection,
        where("categoryId", "==", categoryId)
      );
      getDocs(productsFilter).then((result) =>
        setData(
          result.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(productsCollection).then((result) =>
        setData(
          result.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoryId]);

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
