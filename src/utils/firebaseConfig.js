// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt2F042KoIpms8swlEvUFu90ziJUu21DI",
  authDomain: "kohaican-shop.firebaseapp.com",
  projectId: "kohaican-shop",
  storageBucket: "kohaican-shop.appspot.com",
  messagingSenderId: "691150158495",
  appId: "1:691150158495:web:26b281a7ef8900eec800aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const productsCollection = collection(db, "products");
