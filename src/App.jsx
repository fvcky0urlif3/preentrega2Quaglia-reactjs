import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import { CartProvider } from "./context/CartContext";



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <NavBar />


      <Routes>
      <Route path="/" element={<ItemListContainer saludo ={"Sweet Leaf Merch"} />} />
      <Route path="categoria/:idCategoria" element= {<ItemListContainer saludo ={"Sweet Leaf Merch"} />} /> 
      <Route path="/detalle/:idProducto" element= {<ItemDetailContainer/>} />
      <Route path="/cart" element={<Cart />} />
      </Routes>

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
