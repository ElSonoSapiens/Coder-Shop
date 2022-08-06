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
            <Link to="/category/correas">Correas</Link>
          </ul>
          <ul>
            <Link to="/category/collares">Collares</Link>
          </ul>
          <ul>
            <Link to="/category/juguetes">Juguetes </Link>
          </ul>
          <ul>
            <Link to="/category/alimento">Alimentos </Link>
          </ul>
        </li>
        <CartWidget />
      </header>
    </>
  );
};
export default Navbar;
