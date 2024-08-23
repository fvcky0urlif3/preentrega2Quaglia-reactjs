import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el ícono de carrito de compras
import './navbar.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  let cantidad = cantidadTotal();

  return (
    <Link to="/cart" className="cartwidget">
      <FaShoppingCart className="cart-icon" />
      {cantidad > 0 && <div className="cart-quantity">{cantidad}</div>}
    </Link>
  );
};

export default CartWidget;