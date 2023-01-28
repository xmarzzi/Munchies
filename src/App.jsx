
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {

  return(
    <>  
      <NavBar />
      
      <ItemListContainer 
      saludo = "BIENVENIDO A MUNCHIES!"
      subSaludo ="Mereces buenas botanas"/>   
    </>
  );
};

export default App;
