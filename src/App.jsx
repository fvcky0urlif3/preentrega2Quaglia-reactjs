import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import FloatingCartButton from './components/FloatingCartButton/FloatingCartButton';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Sweet Leaf Merch"} />} />
          <Route path="categoria/:idCategoria" element={<ItemListContainer saludo={"Sweet Leaf Merch"} />} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      <FloatingCartButton /> {/* Agrega el botón flotante aquí */}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;