import React from "react";
import Collar from "../assets/img/collarMediano.jpg";
import "../styles/Item.css";

const Item = ({ info }) => {
  return (
    <>
      <div className="card">
        <h2>{info.name}</h2>
        <img src={info.img} alt="Collar" className="imgItem" />
        <p>{info.description}</p>
      </div>
    </>
  );
};

export default Item;
