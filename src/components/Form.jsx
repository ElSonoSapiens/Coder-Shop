import {
  getFirestore,
  collection,
  serverTimestamp,
  addDocs,
  setDoc,
  addDoc,
  doc,
} from "firebase/firestore";
import React from "react";
import { useState, useContext } from "react";
import "../styles/Form.css";
import { CartContext } from "../components/CartContext";
import { db, ordersCollection } from "../utils/firebaseConfig";
import { clear } from "@testing-library/user-event/dist/clear";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  const clean = () => {
    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
  };

  const cartContext = useContext(CartContext);

  const formSubmit = async (e) => {
    e.preventDefault();

    const newOrder = {
      buyer: {
        name: `${nombre} ${apellido}`,
        phone: telefono,
        email: email,
      },
      items: cartContext.processCart(),
      date: serverTimestamp(),
      total: cartContext.sumTotal(),
    };

    const orderRef = await addDoc(collection(db, "orders"), newOrder);

    alert(`Tu compra fue exitosa. 
    Numero de orden: ${orderRef.id}`);
    cartContext.clear();
  };

  return (
    <div className="selfContainer">
      <form className="formContainer">
        <div className="formInput">
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            required
            id="nombre"
          />
          <input
            type="text"
            placeholder="Apellido"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
            required
          />
          <input
            type="text"
            placeholder="Teléfono"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
            required
          />
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="formBotones">
          <button
            disabled={!nombre || !apellido || !telefono || !email}
            onClick={(e) => formSubmit(e)}
          >
            Confirmar compra
          </button>

          <button onClick={clean}>Limpiar formulario</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
