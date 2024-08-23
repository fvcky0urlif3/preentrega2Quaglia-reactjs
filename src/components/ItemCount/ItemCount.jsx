import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [count, setCount] = useState(1);

  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    agregarAlCarrito(count);
  };

  return (
    <div className="itemcount">
      <div className="controls">
        <button className="control-button" onClick={disminuir}>-</button>
        <p className="count">{count}</p>
        <button className="control-button" onClick={aumentar}>+</button>
      </div>
      <button className="add" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;