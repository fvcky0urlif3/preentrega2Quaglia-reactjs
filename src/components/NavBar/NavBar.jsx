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
            <button>Caps</button>
            </Link>

            <Link to="/categoria/grips" className="categoria">
            <button>Odi Grips</button>
            </Link>

            <Link to="/categoria/hoodies" className="categoria">
            <button>Hoodies</button>
            </Link>

            <Link to="/categoria/pedal" className="categoria">
            <button>Sig Pedal</button>
            </Link>

            <Link to="/categoria/remes" className="categoria">
            <button>Remes</button>
            </Link>

            <CartWidget className="categoria" />

        </ul>

        </nav>
    );
}

export default NavBar;