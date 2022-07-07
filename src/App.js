import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import ItemListContainer from "./containers/ItemListContainer.js";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  );
};
export default App;
