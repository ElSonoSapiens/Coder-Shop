import React, { useState, useEffect } from "react";
import "../styles/ItemListContainer.css";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
// import products from "../products";
import { getDocs, query, where } from "firebase/firestore";
import { productsCollection } from "../utils/firebaseConfig";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const requestFilter = id
      ? query(productsCollection, where("category", "==", id))
      : productsCollection;

    getDocs(requestFilter)
      .then((result) =>
        setData(
          result.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      )
      .catch((err) => console.log("error en array products"));
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
