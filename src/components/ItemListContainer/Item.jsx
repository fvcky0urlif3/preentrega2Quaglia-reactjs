import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <Link to={/detalle/ + producto.id}>
            <img width={100} src={producto.imagen} alt="" />
            <p>{producto.nombre}</p>
        </Link>
       
    );
};
export default Item