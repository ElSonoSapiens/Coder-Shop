import React, { useState, useEffect } from "react";
import "../styles/ItemDetailContainer.css";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
// import products from "../products";
import { productsCollection } from "../utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = ({ greating }) => {
  const [data, setData] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const filter = doc(productsCollection, id);

    getDoc(filter)
      .then((result) => setData({ id: result.id, ...result.data() }))
      .catch((err) => console.log("error en array products Detail"));
  }, [id]);

  return (
    <>
      <div className="detailCatalogo">
        <ItemDetail data={data} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
