import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './FloatingCartButton.css'; 

const FloatingCartButton = () => {
  const { cantidadTotal } = useContext(CartContext);
  const navigate = useNavigate();

  if (cantidadTotal() === 0) return null; 

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