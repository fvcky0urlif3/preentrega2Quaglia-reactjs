import "./navbar.css"
import "./CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div>
                <img className="logosweet" src="./src/assets/sweetlogo.webp" alt="Logo sweet Leaf" />
            </div>
         
        <ul className="categorias">

            <Link to="/categoria/caps" className="categoria">
            <p>Caps</p>
            </Link>

            <Link to="/categoria/grips" className="categoria">
            <p>Odi Grips</p>
            </Link>

            <Link to="/categoria/hoodies" className="categoria">
            <p>Hoodies</p>
            </Link>

            <Link to="/categoria/pedal" className="categoria">
            <p>Sig Pedal</p>
            </Link>

            <Link to="/categoria/remes" className="categoria">
            <p>Remes</p>
            </Link>

        </ul>

        </nav>
    );
}

export default NavBar;