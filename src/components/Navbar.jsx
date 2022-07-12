import "../styles/Navbar.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget.jsx";

const Navbar = () => {
  return (
    <>
      <header className="navBar">
        <h2>KohaiCan</h2>
        <li className="navBarList">
          <ul>
            <a href="#">Collares </a>
          </ul>
          <ul>
            <a href="#">Correas </a>
          </ul>
          <ul>
            <a href="#">Juguetes </a>
          </ul>
          <ul>
            <a href="#">Alimentos </a>
          </ul>
        </li>
        <CartWidget />
      </header>
    </>
  );
};
export default Navbar;
