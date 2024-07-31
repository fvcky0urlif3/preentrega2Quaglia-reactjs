const Item = ({ producto }) => {
    return (
        <div>
            <img width={100} src={producto.imagen} alt="" />
            <p>{producto.nombre}</p>
        </div>
    );
};
export default Item