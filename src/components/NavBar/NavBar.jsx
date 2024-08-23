import "./navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to="/" className="logosweet">
                    <img className="logosweet" src="/src/assets/sweetlogo.webp" alt="Logo Sweet Leaf" />
                </Link>
            </div>

            <ul className="categorias">
                <li>
                    <Link to="/categoria/caps" className="botones">Caps</Link>
                </li>
                <li>
                    <Link to="/categoria/grips" className="botones">Odi Grips</Link>
                </li>
                <li>
                    <Link to="/categoria/hoodies" className="botones">Hoodies</Link>
                </li>
                <li>
                    <Link to="/categoria/pedal" className="botones">Sig Pedal</Link>
                </li>
                <li>
                    <Link to="/categoria/remes" className="botones">Remes</Link>
                </li>
                <li className="cart-widget-container">
                    <CartWidget />
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;