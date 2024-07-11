import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h3>
                <img className="logosweet" src="./src/assets/sweetlogo.webp" alt="Logo sweet Leaf" />
            </h3>
            <div>
                <button className="botones"> Caps </button>
                <button className="botones"> Hoddies </button>
                <button className="botones"> Remes </button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;