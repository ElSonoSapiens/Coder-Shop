import React from "react";
import "../styles/ItemListContainer.css";
import ItemCount from "../components/ItemCount.jsx";

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
  const onAdd = (param) => {
    console.log(`La cantidad comprada es ${param}`);
  };

  return (
    <>
      <div className="catalogo">
        <h1>Catalogo de productos</h1>
        <li className="flexCatalogo">
          <ul>
            <Producto nombre="Correa" descripcion="2mt" precio={2000} />
            <ItemCount initial={0} stock={8} onAdd={onAdd} />
          </ul>
          <ul>
            <Producto nombre="Collar" descripcion="25cm" precio={1500} />
            <ItemCount initial={0} stock={11} onAdd={onAdd} />
          </ul>
          <ul>
            <Producto nombre="Pretal" descripcion="XL" precio={3000} />
            <ItemCount initial={0} stock={5} onAdd={onAdd} />
          </ul>
          <ul>
            <Producto nombre="Balanceado" descripcion="15kg" precio={7000} />
            <ItemCount initial={0} stock={20} onAdd={onAdd} />
          </ul>
        </li>
      </div>
    </>
  );
};

export default ItemListContainer;
