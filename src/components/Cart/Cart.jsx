import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './cart.css';

const Cart = () => {
  const { carrito, aumentarCantidad, disminuirCantidad, borrarProducto, precioTotal, vaciarCarrito } = useContext(CartContext);
  const navigate = useNavigate(); // Inicializar useNavigate

  if (carrito.length === 0) {
    return (
      <div className="empty-cart">
        <p> 😭 El carrito está vacío  😭</p>
        <a href="/" className="button-empty-cart">Volver a la tienda</a>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      <ul className="cart-list">
        {carrito.map((producto) => (
          <li key={`${producto.id}-${producto.categoria}`} className="cart-item">
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="cart-item-details">
              <p>{producto.nombre}</p>
              <p>ID: {producto.id}</p>
              <p>Categoría: {producto.categoria}</p>
              <p>Cantidad: {producto.cantidad}</p>
              <p>Precio: ${producto.precio}</p>
              <div className="cart-item-controls">
                <button onClick={() => disminuirCantidad(producto.id, producto.categoria)}>-</button>
                <button onClick={() => aumentarCantidad(producto.id, producto.categoria)}>+</button>
                <button onClick={() => borrarProducto(producto.id, producto.categoria)}>🗑️</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-controls">
        <h2>Total: ${precioTotal()}</h2>
        <div className="buttons">
          <button className="button-cart" onClick={vaciarCarrito}>Vaciar Carrito</button>
          <button 
            className="button-cart" 
            onClick={() => navigate('/checkout')} // Redirigir al checkout
          >
            Proceder al Pago
          </button>
          <button 
            className="button-cart"
            onClick={() => navigate('/')} // Redirigir a la página principal
          >
            Seguir Navegando
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;