import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import FloatingCartButton from './components/FloatingCartButton/FloatingCartButton';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import { CategoryProvider } from './context/CategoryContext'; // Importa el nuevo contexto
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <CategoryProvider> {/* Envuelve con CategoryProvider */}
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Sweet Leaf Merch"} />} />
            <Route path="categoria/:idCategoria" element={<ItemListContainer saludo={"Sweet Leaf Merch"} />} />
            <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <FloatingCartButton /> {/* Botón flotante */}
          <Footer /> {/* Footer */}
        </CategoryProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;