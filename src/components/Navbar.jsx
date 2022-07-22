import "../styles/Navbar.css";
import CartWidget from "./CartWidget.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="navBar">
        <Link to="/">
          <h2>KohaiCan</h2>
        </Link>
        <li className="navBarList">
          <ul>
            <Link to="/category/1">Correas</Link>
          </ul>
          <ul>
            <Link to="/category/2">Collares</Link>
          </ul>
          <ul>
            <Link to="/category/3">Juguetes </Link>
          </ul>
          <ul>
            <Link to="/category/4">Alimentos </Link>
          </ul>
        </li>
        <CartWidget />
      </header>
    </>
  );
};
export default Navbar;
