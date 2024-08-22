import "./navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";   

const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
                <Link to="/" className="logosweet">
                <img className="logosweet" src="./src/assets/sweetlogo.webp" alt="Logo sweet Leaf" />
                </Link>
            </div>
         
        <ul className="categorias">

            <Link to="/categoria/caps" className="categoria">
            <button className="botones">Caps</button>
            </Link>

            <Link to="/categoria/grips" className="categoria">
            <button className="botones">Odi Grips</button>
            </Link>

            <Link to="/categoria/hoodies" className="categoria">
            <button className="botones">Hoodies</button>
            </Link>

            <Link to="/categoria/pedal" className="categoria">
            <button className="botones">Sig Pedal</button>
            </Link>

            <Link to="/categoria/remes" className="categoria">
            <button className="botones">Remes</button>
            </Link>

            <CartWidget />

        </ul>

        </nav>
    );
}

export default NavBar;