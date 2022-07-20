import "./styles/App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./containers/ItemListContainer.jsx";
import ItemDetailContainer from "./containers/ItemDetailContainer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </>
  );
};
export default App;


