import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {

  return(
    <BrowserRouter>  
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer saludo = "BIENVENIDO A MUNCHIES!"
      subSaludo ="Mereces buenas botanas" />} />
        <Route exact path="/category/:category" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
        
      </Routes>
        
      <Footer />
    </BrowserRouter>
  );
};

export default App;
