import React, { useState, useEffect } from "react";
import "../styles/ItemDetailContainer.css";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
// import products from "../products";
import { getDocs, query, where } from "firebase/firestore";
import { productsCollection } from "../utils/firebaseConfig";

const ItemDetailContainer = ({ greating }) => {
  const [data, setData] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    // const getData = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(products[id]);
    //   }, 2000);
    // });
    // getData.then((res) => setData(res));

    const requestFilter = id
      ? query(productsCollection, where("id", "==", id))
      : productsCollection;

    getDocs(requestFilter)
      .then((result) => setData(result.docs.data()))
      .catch((err) => console.log("error en array products"));
  }, [id]);

  return (
    <>
      <div>{greating}</div>
      <div className="detailCatalogo">
        <ItemDetail data={data} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
