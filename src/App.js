import "./styles/App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  );
};
export default App;
