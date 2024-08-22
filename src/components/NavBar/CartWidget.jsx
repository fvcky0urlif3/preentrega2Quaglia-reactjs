import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./navbar.css";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  let cantidad = cantidadTotal();

  return (
    <Link to="/cart" className="cartwidget">
    <li className="botones">🛒</li>
      <p>{cantidad > 0 && cantidad}</p>
    </Link>
  );
};
export default CartWidget;