import React from "react";
import "./ItemListContainer.css";

const Producto = (props) => {
  return (
    <>
      <h2 className="nombre">{props.nombre}</h2>
      <p className="descripcion">{props.descripcion}</p>
      <p className="precio">{props.precio}</p>
    </>
  );
};

const ItemListContainer = () => {
  return (
    <div className="catalogo">
      <h1>Catalogo de productos</h1>
      <li>
        <ul>
          <Producto nombre="Correa" descripcion="2mt" precio={2000} />
        </ul>
        <ul>
          <Producto nombre="Collar" descripcion="25cm" precio={1500} />
        </ul>
        <ul>
          <Producto nombre="Pretal" descripcion="XL" precio={3000} />
        </ul>
        <ul>
          <Producto nombre="Balanceado" descripcion="15kg" precio={7000} />
        </ul>
      </li>
    </div>
  );
};

export default ItemListContainer;
