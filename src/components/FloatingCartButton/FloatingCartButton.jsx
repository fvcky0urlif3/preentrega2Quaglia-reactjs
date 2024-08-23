import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './FloatingCartButton.css'; // Importa el CSS para el botón flotante

const FloatingCartButton = () => {
  const { cantidadTotal } = useContext(CartContext);
  const navigate = useNavigate();

  if (cantidadTotal() === 0) return null; // No mostrar el botón si el carrito está vacío

  return (
    <button 
      className="floating-cart-button"
      onClick={() => navigate('/cart')}
    >
      Ver carrito
    </button>
  );
};

export default FloatingCartButton;